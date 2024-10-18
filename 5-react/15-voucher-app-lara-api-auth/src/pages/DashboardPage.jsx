import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
  HiUserCircle,
} from "react-icons/hi2";
import Logout from "../components/Logout";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className=" grid  grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<HiCircleStack className=" size-14" />}
              url={"/dashboard/product"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiComputerDesktop className=" size-14" />}
              url={"/dashboard/sale"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiDocumentDuplicate className=" size-14" />}
              url={"/dashboard/voucher"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"User Profile"}
              icon={<HiUserCircle className=" size-14" />}
              url={"/dashboard/user-profile"}
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <p>If you finish your job, just </p>
          <Logout />
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
