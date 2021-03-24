import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookStore } from "../redux/actions";
import { Tabs, Tab, Container, Card, Button } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { useHistory } from "react-router-dom";
import Graph from "./Graph";

const Dashboard = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // state declaration
  const [key, setKey] = useState("list");
  const [bookList, setBookList] = useState([]);
  const [length, setLength] = useState(10);

  // get the user list from API
  const { bookStoreList } = useSelector((state) => state);

  useEffect(() => {
    if (bookStoreList && bookStoreList.length > 0) {
      setBookList(bookStoreList.slice(0, length));
    }
  }, [bookStoreList, length]);

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
          {bookList && bookList.length && (
            <>
              <BootstrapTable
                data={bookList}
                striped
                hover
                search={true}
                options={options}
              >
                <TableHeaderColumn
                  dataField="image"
                  dataFormat={imageFormatter}
                >
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
              {bookStoreList && bookStoreList.length === bookList.length ? (
                <Button className="loadMore" onClick={() => setLength(10)}>
                  Show Less
                </Button>
              ) : (
                <Button
                  className="loadMore"
                  onClick={() => setLength(length + 10)}
                >
                  LoadMore
                </Button>
              )}
            </>
          )}
        </Tab>
        <Tab eventKey="graph" title="Store Graph">
          {bookStoreList && bookStoreList.length > 0 && (
            <Graph data={bookStoreList} />
          )}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
