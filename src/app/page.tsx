"use client";

import { trpc } from "../../utils/trpc";

export default function Home() {
  const { data, isLoading, isFetching } = trpc.getUserList.useQuery({
    limit: 10,
    page: 1,
  });

  const { data: dataTotal, isLoading: isLoadingTotal, isFetching: isFetchingTotal } = trpc.getTotalUser.useQuery()

  if (isLoading || isFetching) return <p>Loading...</p>;
  console.log("user",data);
  console.log("total",dataTotal)
  return (
    <>{data && data.data.users.length > 1 && 
      data.data.users.map((item,index)=>{
        console.log("id",item);
        return(
          <span>
           {item.name}
          </span>
        )
      })
    }</>
  );
}
