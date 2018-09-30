import * as tslib_1 from "tslib";
import * as React from "react";
import { Container } from "semantic-ui-react";
import MainTable from '../MainTable';
var MainView = /** @class */ (function (_super) {
    tslib_1.__extends(MainView, _super);
    function MainView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainView.prototype.render = function () {
        return (React.createElement(Container, { style: { border: "1px gray dashed" }, 
            // textAlign="right"
            // text={true}
            fluid: false },
            React.createElement(MainTable, null)));
    };
    return MainView;
}(React.Component));
;
export default MainView;
//# sourceMappingURL=MainView.js.map