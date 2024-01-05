# -*- coding: utf-8 -*-
{
    'name': "eram_test",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
Long description of module's purpose
    """,

    'author': "TAMJEED A MUHAMMAD",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'sale', 'account', 'sales_tasks'],

    # always loaded
    'data': [
        'views/account_move.xml',
        'views/sale_order.xml',
        'views/purchase_order.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'eram_test/static/src/components/**/*',
        ],
    },
    'installable': True,
    'application': True,
    'license': 'LGPL-3'
}

