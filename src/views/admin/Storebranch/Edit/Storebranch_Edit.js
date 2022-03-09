import React from "react";

export default function CardUserSettings(props) {

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <form>
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="relative w-full px-4 max-w-full flex flex-1 justify-between">
                            <div className="flex flex-wrap">
                                <h6 className="text-blueGray-700 text-xl font-bold ">用戶資料(新增)</h6>
                                <div className="pl-4">
                                    <button
                                        className="bg-emerald-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs p-4 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        返回
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <button
                                    className="text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                >
                                    新增
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            用戶資料
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <div className="flex item-center mb-2">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold"
                                            htmlFor="grid-password"
                                        >
                                            權限設定
                                        </label>
                                        <div className="text-red-500 text-xs font-bold ml-1">*</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <div className="flex item-center mb-2">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold"
                                            htmlFor="grid-password"
                                        >
                                            姓名
                                        </label>
                                        <div className="text-red-500 text-xs font-bold ml-1">*</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        英文姓名
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <div className="flex item-center mb-2">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold"
                                            htmlFor="grid-password"
                                        >
                                            生日
                                        </label>
                                        <div className="text-red-500 text-xs font-bold ml-1">*</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        身分證
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <div className="flex item-center mb-2">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold"
                                            htmlFor="grid-password"
                                        >
                                            密碼
                                        </label>
                                        <div className="text-red-500 text-xs font-bold ml-1">*</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            聯絡方式
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <div className="flex item-center mb-2">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold"
                                            htmlFor="grid-password">國家
                                        </label>
                                        <div className="text-red-500 text-xs font-bold ml-1">*</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        地區
                                    </label>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            關於
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        其他內容
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}