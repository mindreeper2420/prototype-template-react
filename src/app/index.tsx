import React, { Component } from 'react';
import {
  BackgroundImageSrc,
  Brand,
  Button,
  ButtonVariant,
  Level,
  LevelItem,
  Nav,
  NavList,
  NavItem,
  NavVariants,
  Page,
  PageHeader,
  PageSidebar,
  PageSection,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  SkipToContent,
  PageSectionVariants,
  Tab,
  Tabs
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import { css } from '@patternfly/react-styles';
import '@app/app.css';
import '@favicon/favicon.ico';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from '@assets/images/pf_logo.svg';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  public state = {
    activeItem: 0,
    activeTabKey: 0,
    isShowing: true
  };
  public onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    })
  };
  public handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };
  public render() {
    const { isShowing, activeItem } = this.state;
    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" >
        <NavList variant={NavVariants.simple}>
          <NavItem itemId={0} isActive={activeItem === 0}>
            Home
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Authentication
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            API design and management
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Application development
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Integrations
          </NavItem>
          <NavItem itemId={5} isActive={activeItem === 5}>
            Messaging
          </NavItem>
          <NavItem itemId={6} isActive={activeItem === 6}>
            Platform
          </NavItem>
          <NavItem itemId={7} isActive={activeItem === 7}>
            Settings
          </NavItem>
        </NavList>
      </Nav>
    );
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="bellIcon" variant={ButtonVariant.plain}><BellIcon /></Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="CogIcon" variant={ButtonVariant.plain}><CogIcon /></Button>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="PatternFly Logo" />}
        toolbar={PageToolbar}
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />
    const PageSkipContent = (
      <SkipToContent href="#mainContent">Skip to content</SkipToContent>
    )
    return (
      <React.Fragment>
        <Page header={Header} sidebar={Sidebar} isManagedSidebar skipToContent={PageSkipContent}>
          <PageSection variant={PageSectionVariants.light} className="pf-u-pb-0">
            <TextContent className="pf-u-pb-lg">
              <Text component="h1">Welcome to the Red Hat solution explorer</Text>
              <Text component="p">With this application, you can develop, build and deploy enterprise integration solutions using the Red Hat integration portfolio to engage in agile, microservices-based application development.</Text>
            </TextContent>
            <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
              <Tab eventKey={0} title="Tab 1">
                <Level gutter="sm">
                  <LevelItem>
                    Level Item
                  </LevelItem>
                </Level>
              </Tab>
              <Tab eventKey={1} title="Tab 2">
                Tab 2 section
              </Tab>
            </Tabs>
          </PageSection>
        </Page>
      </React.Fragment >
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}
