"use client";

import { useAppContext } from "@/context/Provider";
import { useEffect, useState } from "react";
import BtnStyles from "@/styles/Button.module.css";

function UserDetail({ id }: { id: string }) {
  const { users } = useAppContext() as any;
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    if (id && users?.length > 0) {
      const data = users.find((i: any) => i.id === +id);
      setDetails(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="flex relative items-center justify-center m-6 flex-col border-2 border-red-300 p-3 ">
      <p className="text-gray-500 font-bold">
        {" "}
        Name :<span className="text-cyan-700 text-lg">
          {details?.name}
        </span>{" "}
      </p>
      <p className="text-gray-500 font-bold">
        Email : <span className="text-cyan-600 text-lg">{details?.email}</span>
      </p>
      <p className="text-gray-500 font-bold">
        Phone : <span className="text-cyan-500 text-lg">{details?.phone}</span>
      </p>
      <p className="text-gray-500 font-bold">
        Username :{" "}
        <span className="text-cyan-400 text-lg">{details?.username}</span>
      </p>
      <p className="text-gray-500 font-bold">
        Address :{" "}
        <span className="text-cyan-950 text-lg">
          {details?.address &&
            details?.address?.city + " " + details?.address?.zipcode}
        </span>
      </p>

      <button className={`${BtnStyles.primary} absolute top-0 right-0 p-1 m-1`}>
        Edit
      </button>
    </div>
  );
}

export default UserDetail;
