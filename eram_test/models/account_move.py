from odoo import models, fields, api, _


class AccountMove(models.Model):

    _inherit = 'account.move'

    journal_id_name = fields.Char(related="journal_id.name", readonly=True)