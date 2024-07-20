import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import { useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";
const Month = () => {
  const billList = useSelector((state) => state.bill.billList);
  // useMemo类似于vue的计算属性
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY | MM"));
  }, [billList]);
  console.log(monthGroup);
  // 控制弹框打开关闭
  const [dateVisible, setDateVisible] = useState(false);

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY | MM");
  });
  const [currentMonthList, setCurrentMonthList] = useState([]);
  const monthResult = useMemo(() => {
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);
  const onConfirm = (date) => {
    setDateVisible(false);
    const formatDate = dayjs(date).format("YYYY | MM");
    setCurrentDate(formatDate);
    setCurrentMonthList(monthGroup[formatDate]);
  };
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date">
            <span className="text" onClick={() => setDateVisible(true)}>
              {currentDate + ""}月账单
            </span>
            {/* 思路：根据弹框打开状态控制expand类名是否存在 */}
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;
