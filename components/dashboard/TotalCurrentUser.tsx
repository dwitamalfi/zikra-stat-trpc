import { trpc } from "../../utils/trpc";

export default function TotalCurrentUser() {

  const { data: dataTotal, isLoading: isLoadingTotal, isFetching: isFetchingTotal } = trpc.getTotalUser.useQuery()

  return (
    <div className="content-center h-full text-center">
      <span className="text-2xl">Total Current User</span>
      <div>
        <span className="font-extrabold text-xl">{dataTotal?.data.users}</span>
      </div>
    </div>
  );
}
