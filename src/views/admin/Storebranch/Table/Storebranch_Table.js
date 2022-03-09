import React, { useState } from "react";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import option_country from "data/country_type_data"
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Icon, Button } from 'rsuite';

export default function CardUserTable({ color, data, updateParentState }) {
  const [resizableColumns, setResizableColumns] = useState(false);
  const columns = [
    {
      name: "Discount_title",
      label: "使用者ID",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "Discount_title",
      label: "場館中文名稱",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "domain_type",
      label: "國家",
      options: {
        filter: false,
        sort: false,
        filterOptions: {
          renderValue: v => option_country[v].label
        },
        customFilterListOptions: {
          render: v => option_country[v].label
        },
        sort: false,
        setCellProps: () => ({ style: { whiteSpace: 'nowrap' } }),
        customBodyRenderLite: (dataIndex) => {
          let v = data[dataIndex].domain_type;
          return option_country[v].label
        },
      }
    },
    {
      name: "Discount_title",
      label: "電話號碼",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "Discount_title",
      label: "電子信箱",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: 'tool',
      label: '訂閱狀態',
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({ style: { whiteSpace: 'nowrap' } }),
        filterOptions: {
          renderValue: v => (v) ? "已發佈" : "未發佈"
        },
        customFilterListOptions: {
          render: v => (v) ? "Free" : "已停用"
        },
        customBodyRenderLite: (dataIndex) => {
          let value = data[dataIndex].Discount_active;
          return <>
            <div class="flex flex-wrap">
              <button
                className={(value ? "bg-lightBlue-500 text-white active:bg-lightBlue-600" : "bg-teal-500 text-white active:bg-teal-600") + " font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"}
                type="button"
              >
                {(value) ? "Free" : "已停用"}
              </button>
            </div>
          </>
        },
      }
    },
    {
      name: 'tool',
      label: <span className="whitespace-nowrap">操作</span>,
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          let value = data[dataIndex].Discount_active;
          return <>
            {/* <button
              className="bg-lightBlue-200 rounded text-xs px-4 py-2 w-full whitespace-nowrap"
              type="button"
            >
              {data[dataIndex].tool}
            </button> */}
            <Button
              className="w-full text-xs px-4 py-2 rounded bg-lightBlue-200 whitespace-nowrap lg:w-10/12"
              type="button"
            >
              {data[dataIndex].tool}
            </Button>
          </>
        },
      }
    },
  ];
  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    fixedHeader: true,
    fixedSelectColumn: false,
    tableBodyHeight: '600px',
    rowsPerPage: 10,
    resizableColumns: resizableColumns,
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: false,
    isRowExpandable: (dataIndex, expandedRows) => {
      return true;
    },
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
          </TableCell>
        </TableRow>
      );
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
  };
  return (
    <>
      <div
        className={
          "z-0 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <MUIDataTable title={'場館列表'} data={data} columns={columns} options={options} />
      </div>
    </>
  );
}
CardUserTable.defaultProps = {
  color: "light",
};
CardUserTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};