import * as React from "react";
import {
    Panel,
    PanelBody,
    PanelHeader,
    PanelFooter,
    Surface,
    TeamsThemeContext,
    getContext
} from "msteams-ui-components-react";
import TeamsBaseComponent, { ITeamsBaseComponentProps, ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * State for the holidayBotTab React component
 */
export interface IHolidayBotTabState extends ITeamsBaseComponentState {

}

/**
 * Properties for the holidayBotTab React component
 */
export interface IHolidayBotTabProps extends ITeamsBaseComponentProps {

}

/**
 * Implementation of the holidayBot content page
 */
export class HolidayBotTab extends TeamsBaseComponent<IHolidayBotTabProps, IHolidayBotTabState> {

    public componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));
        this.setState({
            fontSize: this.pageFontSize()
        });

        if (this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        const context = getContext({
            baseFontSize: this.state.fontSize,
            style: this.state.theme
        });
        const { rem, font } = context;
        const { sizes, weights } = font;
        const styles = {
            header: { ...sizes.title, ...weights.semibold },
            section: { ...sizes.base, marginTop: rem(1.4), marginBottom: rem(1.4) },
            footer: { ...sizes.xsmall }
        };
        return (
            <TeamsThemeContext.Provider value={context}>
                <Surface>
                    <Panel>
                        <PanelHeader>
                            <div style={styles.header}>Welcome to the Holiday Bot bot page</div>
                        </PanelHeader>
                        <PanelBody>
                            <div style={styles.section}>
                                TODO: Add your content here
                            </div>
                        </PanelBody>
                        <PanelFooter>
                            <div style={styles.footer}>
                                (C) Copyright The Action Group
                            </div>
                        </PanelFooter>
                    </Panel>
                </Surface>
            </TeamsThemeContext.Provider>
        );
    }
}
