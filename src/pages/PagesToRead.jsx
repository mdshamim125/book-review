import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { getPath } from "../utils/barChar";
import PropTypes from "prop-types";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const getReadBooks = JSON.parse(localStorage.getItem("read")) || [];
    setReadList(getReadBooks);
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <BarChart
        width={1200}
        height={600}
        data={readList}
        className="bg-[#1313130D] m-6 p-6 rounded-xl"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PagesToRead;
