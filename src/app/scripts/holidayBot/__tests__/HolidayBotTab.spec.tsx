import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { HolidayBotTab } from "../HolidayBotTab";

describe("HolidayBot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<HolidayBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<HolidayBotTab />);
        const divResult = component.containsMatchingElement(<div>Welcome to the Holiday Bot bot page</div>);

        expect(divResult).toBeTruthy();
    });
});
