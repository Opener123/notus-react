import React from "react";
// components
import PageTable from "./Table/Storebranch_Table";
import EditPage from "./Edit/Storebranch_Edit";
import faker from 'faker';
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            frame: null
        };
    }
    componentDidMount() {
        var id = 0;
        const createUser = () => ({
            "id": id++,
            "domain_type": faker.datatype.number() % 2, //主要類型
            "Discount_title": faker.name.findName(), //優惠標題
            "Discount_photo": faker.image.avatar(),//優惠圖片
            "Discount_type": faker.datatype.number() % 2,//優惠類型
            "Discount_active": faker.datatype.number() % 2,//優惠狀態
            "Discount_cost": faker.datatype.number() % 100,//優惠成本
            'tool':
                <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs text-right">
                    <TableDropdown update={this.updateState.bind(this)} data={id - 1} />
                </td>//操作
        });
        const createUsers = (numUsers = 50) =>
            new Array(numUsers).fill(undefined).map(createUser);
        const data = createUsers(50);
        this.state.data = data;
        this.setState({ frame: <PageTable data={data} updateParentState={this.updateState.bind(this)} ></PageTable> })
    }
    updateState(action, id) {
        this.setState({ frame: <EditPage data={this.state.data[id]}></EditPage> })
    }
    render() {
        return (
            <>
                {/* <HeaderStats></HeaderStats> */}
                <div className="px-1 md:px-8 mx-auto w-full mt-12 -m-24">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-1">
                            {this.state.frame}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}









