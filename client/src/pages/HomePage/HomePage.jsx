import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import AddNewCustomer from "../AddNewCustomer";
import CustomerTable from "../../components/CustomerTable";
import { AuthState } from "../../context/AuthProvider";
import { fetchCustemers } from "../../utils/fetch";

const HomePage = () => {
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);
  const { auth } = AuthState();
  
  useEffect(() => {
    fetchCustemers(setTableData, auth);
  }, []);

  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button variant="primary" className="mt-2 mb-2" onClick={handleShow}>
        Register New Customer
      </Button>
      <CustomerTable tableData={tableData} setTableData={setTableData} />
      <AddNewCustomer {...{ show, setShow, setTableData }} />
    </Container>
  );
};

export default HomePage;
