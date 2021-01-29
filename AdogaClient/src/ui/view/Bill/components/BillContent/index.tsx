import BillEntities from "@entities/Bill";
import { useSingleAsync } from "@hook/useAsync";
import BillRepositoryImpl from "@useCases/Bill";
import { detailBill } from "@view/Bill/store";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSetRecoilState } from "recoil";
import ApartmentInformation from "../ApartmentInformation";
import BillConfirm from "../BillConfirm";

const BillContent = () => {
  const params: any = useParams();
  const setDetailBill = useSetRecoilState(detailBill);
  const asyncGetDetailBill = useSingleAsync<BillEntities>(
    new BillRepositoryImpl().GetDetail
  );
  useEffect(() => {
    asyncGetDetailBill.execute(params.billId).then((res) => {
      setDetailBill({
        data: res,
      });
    });
  }, []);

  if (!asyncGetDetailBill.value) return null;
  const dataBill = asyncGetDetailBill.value;

  return (
    <div className="">
      <BillConfirm dataBill={dataBill} />
      <ApartmentInformation dataBill={dataBill} />
    </div>
  );
};
export default React.memo(BillContent);
