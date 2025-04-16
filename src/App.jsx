// App.jsx


// IssueRow Component (Child Component for rendering individual issues)
class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;  // We’ll receive a style object from the parent
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        {/* <td style={style}>{this.props.issue_title}</td> */}
        <td style={style}>{this.props.children}</td>
      </tr>
    );
  }
}

// IssueTable Component (Parent Component that manages the list of issues)
class IssueTable extends React.Component {
  render() {
    const rowStyle = { border: "1px solid silver", padding: 4 };  // Styling for rows
    return (
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          {/* Passing data to IssueRow components */}
      {/*     <IssueRow
            rowStyle={rowStyle}
            issue_id={1}
            issue_title="Error in console when clicking Add"
          />
          <IssueRow
            rowStyle={rowStyle}
            issue_id={2}
            issue_title="Missing bottom border on panel"
          /> */}
           <IssueRow rowStyle={rowStyle} issue_id={1}>
            Error in console when clicking Add
          </IssueRow>
          <IssueRow rowStyle={rowStyle} issue_id={2}>
            <div>Missing <b>bottom</b> border on panel</div>
          </IssueRow>
        </tbody>
      </table>
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a form to add an issue.</div>
    );
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));
