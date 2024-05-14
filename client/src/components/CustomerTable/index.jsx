import { useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ChoosePlan from "../Plan/ChoosePlan";
import ModifyPlan from "../Plan/ModifyPlan";
import RenewPlan from "../Plan/RenewPlan";

function CustomerTable({ tableData, setTableData }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showChoosePlan, setShowChoosePlan] = useState(false);
  const [showRenewPlan, setShowRenewPlan] = useState(false);
  const [showModifyPlan, setShowModifyPlan] = useState(false);

  const handleChoosePlan = useCallback((row) => {
    setShowChoosePlan(true);
    setSelectedRow(row);
  }, []);
  const handleRenewPlan = useCallback((row) => {
    setShowRenewPlan(true);
    setSelectedRow(row);
  }, []);
  const handleModifyPlan = useCallback((row) => {
    setShowModifyPlan(true);
    setSelectedRow(row);
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Assigned number</th>
            <th>Plan Details</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, i) => {
            return (
              <tr key={data?.id || i}>
                <td>{data?.id}</td>
                <td>{data?.name}</td>
                <td>{data.email}</td>
                <td>{data.registrationDate}</td>
                <td>{data.assignedMobileNumber}</td>
                <td>
                  {data.plan ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        data.plan?.planStatus
                          ? handleModifyPlan(data)
                          : handleRenewPlan(data)
                      }
                    >
                      {data.plan?.planStatus ? "Modify plan" : "Renew plan"}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleChoosePlan(data)}
                    >
                      Choose plan
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ChoosePlan
        {...{
          showChoosePlan,
          setShowChoosePlan,
          customer: selectedRow,
          setTableData,
        }}
      />
      <ModifyPlan
        {...{
          showModifyPlan,
          setShowModifyPlan,
          customer: selectedRow,
          setTableData,
        }}
      />
      <RenewPlan
        {...{
          showRenewPlan,
          setShowRenewPlan,
          customer: selectedRow,
          setTableData,
        }}
      />
    </>
  );
}

export default CustomerTable;
