'use strict';
define(
    [
        'backgrid',
        'moment',
        'Shared/FormatHelpers'
    ], function (Backgrid, Moment, FormatHelpers) {
        return Backgrid.Cell.extend({
            className: 'air-date-cell',

            render: function () {

                this.$el.empty();
                var date = this.model.get(this.column.get('name'));

                if (date) {
                    this.$el.html(FormatHelpers.DateHelper(date));

                    this.$el.attr('title', Moment(date).format('LLLL'));
                }

                return this;

            }
        });
    });