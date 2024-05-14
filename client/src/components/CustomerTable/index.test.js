import renderer from 'react-test-renderer';
import CustomerTable from '.';
import AuthProvider from '../../context/AuthProvider';

describe('Test Dashboard', ()=>{
    it('If new user generate snap shot to choose plan', () => {
        const tableData = [{
            "name": "irfangg",
            "dob": "2024-05-12",
            "email": "irfan@gmail.com",
            "adharNumber": "213",
            "registrationDate": 1732110946770,
            "assignedMobileNumber": "122",
            "plan": null,
            "id": "cb3e"
        }];
        const setTableData = jest.fn();
        const component = renderer.create(
            <AuthProvider>
                <CustomerTable tableData={tableData} setTableData={setTableData} />
            </AuthProvider>
        );
        expect(component).toMatchSnapshot();
    });
    it('If existing user and plan status is active generate snapshot for modify plan', () => {
        const tableData = [{
            "name": "irfangg",
            "dob": "2024-05-12",
            "email": "irfan@gmail.com",
            "adharNumber": "213",
            "registrationDate": 1732110946770,
            "assignedMobileNumber": "122",
            "plan": {
                "planName": "Gold",
                "planCost": 299,
                "validity": 180,
                "planStatus": true
            },
            "id": "cb3e"
        }];
        const setTableData = jest.fn();
        const component = renderer.create(
            <AuthProvider>
                <CustomerTable tableData={tableData} setTableData={setTableData} />
            </AuthProvider>
        );
        expect(component).toMatchSnapshot();
    });
    it('If existing user and plan status is not active generate snapshot for renew plan', () => {
        const tableData = [{
            "name": "irfangg",
            "dob": "2024-05-12",
            "email": "irfan@gmail.com",
            "adharNumber": "213",
            "registrationDate": 1732110946770,
            "assignedMobileNumber": "122",
            "plan": {
                "planName": "Gold",
                "planCost": 299,
                "validity": 180,
                "planStatus": false
            },
            "id": "cb3e"
        }];
        const setTableData = jest.fn();
        const component = renderer.create(
            <AuthProvider>
                <CustomerTable tableData={tableData} setTableData={setTableData} />
            </AuthProvider>
        );
        expect(component).toMatchSnapshot();
    })
});