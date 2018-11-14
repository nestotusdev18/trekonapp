const { Component, createContext, Fragment } = React;
const { render } = ReactDOM;
console.clear();

/*************************************************/
// TabContent
/*************************************************/
// this passes down this.props.activeId to the children
class TabContentWrapper extends Component {
  render() {
    const content = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { activeId: this.props.activeId })
    );
    return <div className="tab-content-wrapper">{content}</div>;
  }
}
// this handles display of active Tab Content by comparing it's own this.props.id vs this.props.activeId
const TabContent = ({ id, activeId, children }) => {
  const activeClass = id === activeId ? "selected" : "";
  return <div className={`tab-content ${activeClass}`}>{children}</div>;
};

const Joker = ({ id, activeId }) => (
  <TabContent id={id} activeId={activeId}>
    <h2>Joker</h2>
  </TabContent>
);

const Monkey = ({ id, activeId }) => (
  <TabContent id={id} activeId={activeId}>
    <h2>Monkey</h2>
  </TabContent>
);

const Mango = ({ id, activeId }) => (
  <TabContent id={id} activeId={activeId}>
    <h2>Mango</h2>
  </TabContent>
);

const Something = ({ id, activeId }) => (
  <TabContent id={id} activeId={activeId}>
    <h1>Something</h1>
  </TabContent>
);

/*************************************************/
// navData ~ with nested child nav content
/*************************************************/
const navData = [
  {
    id: "0.0",
    title: "Funny",
    defaultActive: "0.1",
    children: [
      {
        id: "0.1",
        title: "Joker"
      },
      {
        id: "0.2",
        title: "Monkey"
      }
    ]
  },
  {
    id: "1.0",
    title: "Food",
    defaultActive: "1.1",
    children: [
      {
        id: "1.1",
        title: "Mango"
      }
    ]
  },
  {
    id: "2.0",
    title: "Something Big",
    defaultActive: "2.0",
    children: []
  }
];

/*************************************************/
// TabNav Components
/*************************************************/
const TabControlUnitMain = ({ mainItem, updateActive, children, active }) => {
  if (mainItem.defaultActive === active && !children) {
    if (!children) {
      return (
        <button className="t-l-c__main tab-control selected">
          {mainItem.title}
        </button>
      );
    }
  } else {
    return (
      <div className="t-l-c__main__wrapper">
        <button
          className="t-l-c__main tab-control"
          onClick={() => {
            updateActive(mainItem.defaultActive);
          }}
        >
          {mainItem.title}
        </button>
        {children}
      </div>
    );
  }
};
const TabControlUnitChild = ({ childItem, updateActive, active }) => {
  const selectedClass = active === childItem.id ? "selected" : "";
  return (
    <button
      className={`t-l-c__child ${selectedClass} tab-control`}
      onClick={() => {
        updateActive(childItem.id);
      }}
    >
      {childItem.title}
    </button>
  );
};
class MyTabNav extends Component {
  render() {
    const { updateActive, navData, active } = this.props;
    return (
      <div className="tab-left-control">
        {navData.map(mainItem => {
          if (mainItem.children.length === 0) {
            return (
              <TabControlUnitMain
                active={active}
                mainItem={mainItem}
                key={mainItem.id}
                updateActive={updateActive}
              />
            );
          } else {
            return (
              <TabControlUnitMain
                mainItem={mainItem}
                key={mainItem.id}
                updateActive={updateActive}
              >
                {mainItem.children.map(childItem => (
                  <TabControlUnitChild
                    key={childItem.id}
                    childItem={childItem}
                    updateActive={updateActive}
                    active={active}
                  />
                ))}
              </TabControlUnitMain>
            );
          }
        })}
      </div>
    );
  }
}

/*************************************************/
// Main Tab Components
/*************************************************/
const TabContext = createContext();
class Tab extends Component {
  static Consumer = TabContext.Consumer;
  static defaultProps = {
    initialActiveId: "0.1"
  };
  initialState = {
    activeId: this.props.initialActiveId
  };
  state = this.initialState;
  updateActiveId = id => {
    this.setState({
      activeId: id
    });
  };
  render() {
    return (
      <div className="tab">
        <TabContext.Provider
          value={{
            activeId: this.state.activeId,
            updateActiveId: this.updateActiveId
          }}
        >
          {this.props.children}
        </TabContext.Provider>
      </div>
    );
  }
}

const App = () => (
  <div className="app">
    <Tab>
      <TabContext.Consumer>
        {({ activeId, updateActiveId }) => (
          <Fragment>
            <MyTabNav
              updateActive={updateActiveId}
              navData={navData}
              active={activeId}
            />
            <TabContentWrapper activeId={activeId}>
              <Joker id="0.1" />
              <Monkey id="0.2" />
              <Mango id="1.1" />
              <Something id="2.0" />
            </TabContentWrapper>
          </Fragment>
        )}
      </TabContext.Consumer>
    </Tab>
  </div>
);

render(<App />, document.getElementById("root"));
