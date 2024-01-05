/** @odoo-module **/

import { registry } from "@web/core/registry";
import { usePopover } from "@web/core/popover/popover_hook";
import { useService } from "@web/core/utils/hooks";
import { parseDate, formatDate } from "@web/core/l10n/dates";
import { formatMonetary } from "@web/views/fields/formatters";
const { Component, onWillUpdateProps } = owl;

export class OrderPaymentField extends Component {
    setup() {
        this.popover = usePopover();
        this.orm = useService("orm");
        this.action = useService("action");

        this.formatData(this.props);
        onWillUpdateProps((nextProps) => this.formatData(nextProps));
    }

    formatData(props) {
        const info = props.value || {
            content: [],
            outstanding: false,
            title: "",
            move_id: this.props.record.data.id,
        };

        
        for (let [key, value] of Object.entries(info.content)) {
            value.index = key;
            value.amount_formatted = formatMonetary(value.amount, { currencyId: value.currency_id });
            if (value.date) {
                // value.date is a string, parse to date and format to the users date format
                value.date = formatDate(parseDate(value.date));
            }
        }

        this.lines = info.content;
        this.total_amount_paid = info.content.reduce((sum, payment) => sum + payment.amount, 0);
        this.outstanding = info.outstanding;
        this.title = info.title;
        this.move_id = info.move_id;
    }
}
OrderPaymentField.template = "eram_test.OrderPaymentField";
OrderPaymentField.supportedTypes = ["char"];

registry.category("fields").add("orderpayment", OrderPaymentField);
