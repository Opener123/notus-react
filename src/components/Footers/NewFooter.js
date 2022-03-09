import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MuiTablePagination from "@material-ui/core/TablePagination";
import { withStyles } from "@material-ui/core/styles";

const defaultFooterStyles = {
};

class CustomFooter extends React.Component {

    handleRowChange = event => {
        this.props.changeRowsPerPage(event.target.value);
    };

    handlePageChange = (_, page) => {
        this.props.changePage(page);
    };

    render() {
        const { count, classes, textLabels, rowsPerPage, page } = this.props;
        console.log(count)
        console.log(rowsPerPage)
        console.log(page)

        const footerStyle = {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0px 24px 0px 24px'
        };
        var pagebtn = [];
        for (var i = 0; i < count / rowsPerPage; i++) {
            const index = i
            pagebtn.push(<li>
                <a href="#pablo" onClick={() => this.props.changePage(index)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                    {i + 1}
                </a>
            </li>)
        }
        return (
            <TableFooter>
                <TableRow>
                    <TableCell style={footerStyle} colSpan={1000}>

                        <div className="py-4">
                            <nav className="block">
                                <ul className="flex pl-0 rounded list-none flex-wrap">
                                    <li>
                                        <a href="#pablo" onClick={() => this.props.changePage(0)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                                            <i className="fas fa-chevron-left -ml-px"></i>
                                            <i className="fas fa-chevron-left -ml-px"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" onClick={() => this.props.changePage(page - 1)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                                            <i className="fas fa-chevron-left -ml-px"></i>
                                        </a>
                                    </li>

                                    {pagebtn}


                                    <li>
                                        <a href="#pablo" onClick={() => this.props.changePage(page + 1)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                                            <i className="fas fa-chevron-right -mr-px"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" onClick={() => this.props.changePage(count / rowsPerPage)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                                            <i className="fas fa-chevron-right -mr-px"></i>
                                            <i className="fas fa-chevron-right -mr-px"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>


                    </TableCell>
                </TableRow>
            </TableFooter>
        );
    }

}

export default withStyles(defaultFooterStyles, { name: "CustomFooter" })(CustomFooter);