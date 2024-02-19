"use client";
import "@/styles/statistics.scss";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Text,
} from "recharts";

import { getAuthContext } from "../../components/AuthContextProvider";
import { readHeuristicData, readUIData } from "@/lib/firebase/firestore";

import { IoAlertCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

import { getDataSuite } from "../../components/ContextProvider";
import { Enriqueta } from "next/font/google";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);
/*
[
    { name: "Correct", value: 3 },
    { name: "incorrect", value: 2 },
  ]
  */
const AlertIcon = (
  <IconContext.Provider
    value={{
      color: "red",
      size: "25%",
    }}
  >
    <IoAlertCircle />
    <h3>No Data</h3>
  </IconContext.Provider>
);

export default function Statistics() {
  const { user } = getAuthContext();
  const [currHeuristic, setCurrHeuristic] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [currData, setCurrData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const length = 10;
  const [currentHeuristic, setCurrentHeuristic] = useState(0);
  //const dataArray = [];
  const [dataArray, setDataArray] = useState(Array(10).fill(null));

  const colors = { incorrect: "#F24336", correct: "#4BAE4F" };

  function handleScreenResize() {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  function handleClick(index) {
    setCurrHeuristic(index);
    setActiveButton(index);
  }

  // function setData(data, prevData) {
  //   setDataArray((prevData) => [...prevData, data]);
  // }

    async function getAllData() {
      //Figure out a caching mechanism
      const { result, error, data } = await readHeuristicData(
        currentHeuristic + 1,
        user.uid
      );
      //TODO: Get UI builder data

      // console.log(data);

      if (!data) {
        //setDataArray(prevArray => [...prevArray, null]);
      } else {
        let i = 0;
        const newData = [];
        for (const [key, value] of Object.entries(data)) {
          newData[i] = {
            type: key === "correct" ? 1 : 0,
            name: `Number of questions ${key}`,
            value,
          };
          i++;
        }
        setDataArray(prevArray => {
          const updatedArray = [...prevArray];
          updatedArray[currentHeuristic] = newData;
          return updatedArray;
        });
      }
      console.log(dataArray);
    }

    getAllData();

    if(currentHeuristic < 10) {
      setCurrentHeuristic(currentHeuristic + 1);
      getAllData();
    }

  useEffect(() => {
    async function getData() {
      //Figure out a caching mechanism
      const { result, error, data } = await readHeuristicData(
        currHeuristic + 1,
        user.uid
      );
      //TODO: Get UI builder data

      // console.log(data);

      if (!data) {
        setCurrData(null);
      } else {
        let i = 0;
        const newData = [];
        for (const [key, value] of Object.entries(data)) {
          newData[i] = {
            type: key === "correct" ? 1 : 0,
            name: `Number of questions ${key}`,
            value,
          };
          i++;
        }
        setCurrData(newData);
      }
    }

    getData();
  }, [currHeuristic]);

  return (
    <main>
      {isMobile ? (
        <label className="mobile-dropdown">
          Select a Heuristic:
          <select
            name="selectedHeuristic"
            value={currHeuristic}
            onChange={(e) => handleClick(Number(e.target.value))}
          >
            {heuristics.map((_, i) => (
              <option value={i}>{i + 1}</option>
            ))}
          </select>
        </label>
      ) : null}
      {/* <div className="progress-container">
        <h2>Current Progress:</h2>
        <ResponsiveContainer width="50%" height={250}>
          <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={importedUserData.progressData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {importedUserData.progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div> */}

      <div className="main-stat-container">
        {
          !isMobile ? (
            <section className="stat-buttons">
              {dataArray.map((data, i) => (
                 !data ? (
                  <button
                  key={i}
                  disabled
                  className="disabled"
                  >
                    Complete Heuristic {i + 1} to Unlock
                  </button>
                 ) : (
                  <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className={activeButton === i ? "active" : ""}
                  >
                    Heuristic {i + 1}
                  </button>
                 )
              ))}
            </section>
          ) : null
          // !isMobile ? (
          //   <section className="stat-buttons">
          //     {heuristics.map((heuristic, index) => (
          //         {dataArray.map((data, i) => (
          //           if (data[i] === null) {
          //             <button
          //             key={index}
          //             disabled
          //             className="disabled"
          //           >
          //             Complete {heuristic} to unlock
          //           </button>
          //           }
          //           else {
          //             <button
          //             key={index}
          //             onClick={() => handleClick(index)}
          //             className={activeButton === index ? "active" : ""}
          //           >
          //             {heuristic}
          //           </button>
          //           }
          //       ))}
          //     ))}
          //   </section>
          // ) : null
          // <label className="mobile-dropdown">
          //   Select a Heuristic:
          //   <select
          //     name="selectedHeuristic"
          //     value={currHeuristic}
          //     onChange={(e) => handleClick(Number(e.target.value))}
          //   >
          //     {heuristics.map((_, i) => (
          //       <option value={i}>{i + 1}</option>
          //     ))}
          //   </select>
          // </label>
        }
        <section className="stat-container">
          <div className="stat-graphs">
            {/* <ResponsiveContainer className="stats-container"> */}
            <div className="stat-graph-container">
              <h2 className="heuristic-title">Heuristic Data</h2>
              {currData ? (
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={currData.filter(entry => entry.name === "Number of questions correct" || entry.name === "Number of questions incorrect")}
                      fill="#8884d8"
                      label
                    >
                      {currData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.type ? colors.correct : colors.incorrect}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                AlertIcon
              )}
            </div>
            <div className="stat-graph-container">
              <h2 className="heuristic-title">UI Builder Data</h2>
              {currData ? (
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={currData.filter(entry => entry.name === "Number of questions correct" || entry.name === "Number of questions incorrect")}
                      fill="#8884d8"
                      label
                    >
                      {currData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.type ? colors.correct : colors.incorrect}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                AlertIcon
              )}
            </div>
            {/* </ResponsiveContainer> */}
          </div>
        </section>
      </div>
    </main>
  );
}
