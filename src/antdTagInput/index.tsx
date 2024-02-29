import React, { FC, useMemo, useState } from "react";
import { DatePicker, Badge } from "antd";
import { DatePickerProps } from "antd/lib/date-picker";

type Props = DatePickerProps & {
  apiUrl?: string;
  env?: "production" | "dev" | "local";
  onGetDdpInfo?: (ddpInfo: any) => void;
};
const DDpDatePicker: FC<Props> = (props) => {
  return <div></div>;
};

export default DDpDatePicker;
