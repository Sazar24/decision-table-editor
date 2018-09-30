import * as tslib_1 from "tslib";
import * as React from "react";
import { Table } from "semantic-ui-react";
var MainTable = /** @class */ (function (_super) {
    tslib_1.__extends(MainTable, _super);
    function MainTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTable.prototype.render = function () {
        return (React.createElement(Table, null,
            React.createElement(Table.Header, null,
                React.createElement(Table.Row, null,
                    React.createElement(Table.HeaderCell, null, "Conditions"))),
            React.createElement(Table.Body, null)));
    };
    return MainTable;
}(React.Component));
export default MainTable;
;
//# sourceMappingURL=MainTable.js.map