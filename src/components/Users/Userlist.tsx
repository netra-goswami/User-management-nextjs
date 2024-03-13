"use client";

import Link from "next/link";
import { UserInterface } from "../generic/constant";
import { useAppContext } from "@/context/Provider";
import { useEffect } from "react";

interface UserListInterface {
  data: UserInterface[];
}
function Userlist({ data }: UserListInterface) {
  const { setUsers } = useAppContext() as any;
  useEffect(() => {
    if (data?.length > 0) {
      setUsers(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div className="p-5 flex items-center justify-center ">
      {data?.length > 0 && (
        <table className="border-collapse border border-cyan-200">
          <thead>
            <tr className="">
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Email</th>
              <th className="border border-slate-600">Phone</th>
              <th className="border border-slate-600 p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="border border-slate-700 p-3">{user.name}</td>
                  <td className="border border-slate-700 p-3">{user.email}</td>
                  <td className="border border-slate-700 p-3">{user.phone}</td>
                  <td className="border border-slate-700 p-3">
                    <Link
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                      href={`/user/${user.id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* <Pagination setFilterUser={setFilterUser} /> */}
    </div>
  );
}

export default Userlist;
