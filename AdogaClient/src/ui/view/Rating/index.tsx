import TableApi from "@components/commons/TableApi"
import { useAsync } from "@hook/useAsync"
import RatingInteractor from "@useCases/rating"
import { Breadcrumb, Card, Progress, Rate, Table } from "antd"
import React, { useEffect, useState } from "react"
import moment from "moment"
import { StarFilled, RightOutlined } from "@ant-design/icons"
import "./style.scss"
import { Link } from "react-router-dom"
import SearchComponent from "@components/commons/SearchComponent/SearchComponent"
import useTable from "@components/commons/TableApi/hook"
import { debounce } from "src/shared/functions"
import { useTranslate } from "@hook/useTranslate"
import { common, rating } from "@translateKey/index"
import useListRating from "./viewModel"
import { DatePicker, Space } from 'antd'
const { RangePicker } = DatePicker
const { getAllRatingPagination } = new RatingInteractor()

const Rating = (props) => {
  const table = useTable()
  const [ asyncGetList ] = useAsync(getAllRatingPagination)
  const { numberUserOfStar, employee, getAverageStar, numberUserOfTopStar } = useListRating(asyncGetList.value?.data)
  const totalUser = asyncGetList.value?.info?.total || 0
  const averageStar = getAverageStar(totalUser) || 0

  useEffect(() => {
    asyncGetList.execute()
  }, [])

  const search = debounce(function (value) {
    table.fetchData({ option: { search: value } })
  }, 500)

  const { HOME, CREATE_AT, NAME } = useTranslate(common)
  const { RATING, EMPLOYEE } = useTranslate(rating)

  return (
    <div className="wrap-rating">
      <section className="d-flex align-items-center">
        <Breadcrumb
          className="flex-auto breadcb mb-3"
          separator={<RightOutlined />}
        >
          <Breadcrumb.Item>{HOME}</Breadcrumb.Item>
          <Breadcrumb.Item className="breadcb__last">
            <Link to={`/rating`}>{RATING}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </section>
      <div className="rating flex mr-3 w-full">
        <Card className="list-star w-1/4 ant-card-bordered rounded-xl place-self-start">
          <div className="average">
            <div className="number">{averageStar}</div>
            <div className="w-full flex justify-center mb-4">
              <Rate
                allowHalf
                value={Math.round(averageStar)}
                disabled
              />
            </div>
          </div>
          {Object.keys(numberUserOfStar).map((star) => {
            return (
              <div className={`w-full`}>
                <div className={`typestar w-full flex justify-between`}>
                  <div className="w-full flex">
                    {star}
                    <StarFilled className={`color${ star }`} />
                    <div className="w-full wrap-progess bg-#fafbfc">
                      <div
                        className={`progress bg${ star }`}
                        style={{
                          width: `${ (numberUserOfStar[ star ] /
                            numberUserOfTopStar) *
                            100 || 0
                            }%`,
                          backgroundColor: "red",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-5">{numberUserOfStar[ star ]}</div>
                </div>
              </div>
            )
          })}
          <div className="employee mt-3" style={{ textAlign: "end" }}>
            {EMPLOYEE}:{" "}
            <b>
              {employee}/{totalUser}
            </b>
          </div>
        </Card>
        <Card className="w-3/4 ant-card-bordered rounded-xl">
          <div className="flex justify-between">
            <SearchComponent width={"500px"} onChange={search} />
            <RangePicker onChange={(value) => {
              let option = {
                DateFrom: '',
                DateTo: '',
              }

              if (value) {
                option = {
                  DateFrom: moment(value[ 0 ]).format('YYYY-MM-DD'),
                  DateTo: moment(value[ 1 ]).format('YYYY-MM-DD'),
                }
              }

              asyncGetList.execute(null, option)
              table.fetchData({ option })
            }} />
          </div>
          <div className="mb-3"></div>
          <TableApi
            register={table}
            apiServices={getAllRatingPagination}
            columns={[
              {
                title: NAME,
                dataIndex: "nameDisplay",
                key: "nameDisplay",
                sorter: (a, b) => null,
                render: (text) => {
                  return text || 'Anonymous'
                }
              },
              {
                title: RATING,
                dataIndex: "star",
                key: "star",
                align: "center",
                sorter: (a, b) => null,
                render: (text, record) => {
                  return <Rate disabled allowHalf value={text} />
                },
              },
              {
                title: CREATE_AT,
                dataIndex: "createdAt",
                key: "createdAt",
                align: "center",
                sorter: (a, b) => null,
                render: (text) => {
                  return moment(text).format("DD-MM-YYYY hh:mm:ss")
                },
              },
            ]}
          />
        </Card>
      </div>
    </div>
  )
}

export default Rating