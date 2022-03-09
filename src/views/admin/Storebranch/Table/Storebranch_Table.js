import React, { useState } from "react";
import store from "data/store"
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Icon, Button } from 'rsuite';
import MUIDataTable from "mui-datatables";
import option from "data/option.js"
import CustomFooter from 'components/TableFooter/footer';

export default function CardUserTable({ data, update }) {
  const [resizableColumns, setResizableColumns] = useState(false);
  const [cookies, setCookie] = useCookies();
  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
        display: false,
        filter: false,
      }
    },
    {
      name: "personalId",
      label: <span className="whitespace-nowrap">使用者ID</span>,
      options: {
        filter: false,
        sort: false
      }
    },



    {
      name: 'tool',
      label: '操作',
      options: {
        filter: false,
        sort: false,
        setCellProps: () => ({ style: { whiteSpace: 'nowrap' } }),
        customBodyRenderLite: (dataIndex) => {
          return <Button onClick={() => update('edit', dataIndex)} appearance="ghost" color="blue" className="w-full hover:shadow-md lg:w-12/12">
            <Icon icon="edit" /> 編輯
          </Button>
        },
      }
    },
  ];
  const deleteList = (idList) => {
    const headers = {
      'Authorization': 'Bearer ' + cookies.token
    };
    var jsonData = {}
    jsonData['idList'] = String(idList)
    jsonData['companyId'] = cookies.companyId
    axios.post(store.webApiUrl + 'User/DeleteList/', jsonData, { headers })
      .then(r => {
        if (r.status == "200") {
          alert('刪除成功')
          window.location.reload(false);
          return true;
        } else {
          alert('刪除失敗')
          return false
        }
      });
  }
  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    fixedHeader: false,
    fixedSelectColumn: false,
    tableBodyHeight: '600px',
    rowsPerPage: 10,
    resizableColumns: resizableColumns,

    setRowProps: (row, dataIndex, rowIndex) => {
      if (dataIndex % 2 == 0)
        return {
          style: { backgroundColor: "rgba(186, 240, 253,.3)" },
        };
    },
    onRowsDelete: (rowsDeleted) => {
      var idList = []
      rowsDeleted.data.forEach(e => {
        idList.push(data[e.dataIndex].id)
      });
      return deleteList(idList)
    },
    // customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
    //   return (
    //     <CustomFooter
    //       count={count}
    //       page={page}
    //       rowsPerPage={rowsPerPage}
    //       changeRowsPerPage={changeRowsPerPage}
    //       changePage={changePage}
    //       textLabels={textLabels}
    //     />
    //   );
    // },
  };
  var title = <>
    用戶列表
    <button
      className=" bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs m-4 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => update("add")}
    >
      <Icon icon="plus" className="mr-1" />新增用戶
    </button>
  </>
  return (
    <>
      <div className={"z-0 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg"}>
        <MUIDataTable title={title} data={data} columns={columns} options={options} />
      </div>
    </>
  );
}