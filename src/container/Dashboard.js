import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookStore } from "../redux/actions";
import { Tabs, Tab, Container, Card } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  
  // state declaration
  const [key, setKey] = useState("list");

  // get the user list from API
  const { bookStoreList } = useSelector((state) => state);

  useEffect(() => {
    //call action to get user list
    dispatch(fetchBookStore());
  }, [dispatch]);

  const handleRow = (row) => {
    history.push("/author-profile", { data: row });
  };

  const options = {
    onRowClick: handleRow,
  };

  function imageFormatter(cell, row) {
    return "<img src='" + cell + "'/>";
  }

  return (
    <Container style={{ padding: 5 }}>
      <Card.Title className="title">Book Store</Card.Title>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="list" title="Store List">
          {bookStoreList && bookStoreList.length && (
            <BootstrapTable
              data={bookStoreList}
              striped
              hover
              search={true}
              options={options}
            >
              <TableHeaderColumn dataField="image" dataFormat={imageFormatter}>
                Image
              </TableHeaderColumn>

              <TableHeaderColumn isKey dataField="title" dataSort={true}>
                Title
              </TableHeaderColumn>
              <TableHeaderColumn dataField="subtitle" dataSort={true}>
                Description
              </TableHeaderColumn>
              <TableHeaderColumn dataField="price" dataSort={true}>
                Book Price
              </TableHeaderColumn>
            </BootstrapTable>
          )}
        </Tab>
        <Tab eventKey="graph" title="Store Graph">
          <div>FIrst</div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
