import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import ErrorField from "../../../components/ErrorField";
import { SellFormInputs } from "./SellOrderForm";

type BuyFormInputs = SellFormInputs;

const BuyOrderSchema = object().shape({
  amount: number().required("Enter amount"),
  orderType: string().oneOf(["Market Execution", "Pending Order"]),
  symbol: string().max(6),
  stopLoss: number(),
  takeProfit: number(),
});

const BuyOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyFormInputs>({
    resolver: yupResolver(BuyOrderSchema),
    shouldFocusError: true,
  });

  /**
   * Handles buy form order placement
   */
  const handleBuy = handleSubmit((data) => {
    console.log(data);

  })

  return (
    <div
      className="modal fade"
      id="modal-10"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modal-10"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-min"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body text-center">
            {" "}
            <h1 className="text-success">BUY ORDER</h1>
            <hr />
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <form onSubmit={handleBuy}>
              <div className="row">
                <div className="col-md-12 pr-md-1">
                  <div className="form-group">
                    <label>Volume</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Amount to buy"
                      step="any"
                      required
                      {...register("amount")}
                    />
                    <ErrorField error={errors.amount} />
                  </div>
                </div>
                <div className="col-md-12 px-md-1">
                  <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" {...register("orderType")}>
                      <option value="Market Execution">Market Execution</option>
                      <option value="Pending Order">Pending Order</option>
                    </select>
                    <input type="hidden" name="ordertype" defaultValue="buy" />
                  </div>
                </div>
                <div className="col-md-12 pl-md-1">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Symbol</label>
                    <select  className="form-control" {...register("symbol")}>
                      <option value="EURUSD ">
                        EURUSD , Euro vs United state Dollar
                      </option>
                      <option value="USDJPY">
                        USDJPY, UNITED STATE DOLLAR VS JAPANESE YEN
                      </option>
                      <option value="GBPUSD">
                        GBPUSD, GREAT BRITAIN POUNDS VS UNITED STATE DOLLAR
                      </option>
                      <option value="USDCAD">
                        USDCAD, UNITED STATE DOLLAR VS CANADIAN DOLLAR
                      </option>
                      <option value="USDCHF">
                        USDCHF, UNITED STATE DOLLAR VS SWISS FRANC
                      </option>
                      <option value="NZDUSD">
                        NZDUSD, NEW ZEALAND DOLLAR VS UNITED STATE DOLLAR
                      </option>
                      <option value="AUDUSD">
                        AUDUSD, AUSTRALIAN DOLLAR VS UNITED STATE DOLLAR
                      </option>
                      <option value="AUDNZD">
                        AUDNZD, AUSTRALIAN DOLLAR VS NEW ZEALAND DOLLAR
                      </option>
                      <option value="AUDCAD">
                        AUDCAD, AUSTRALIAN DOLLAR VS CANADIAN DOLLAR
                      </option>
                      <option value="AUDCHF">
                        AUDCHF, AUSTRALIAN DOLLAR VS SWISS FRANC
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-md-1">
                  <div className="form-group">
                    <label>
                      Stop Loss <b>(SL)</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      defaultValue={0.0}
                      step="any"
                      required
                      {...register("stopLoss")}
                    />
                  </div>
                </div>
                <div className="col-md-6 pl-md-1">
                  <div className="form-group">
                    <label>
                      Take Profit <b>(TP)</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      defaultValue={0.0}
                      step="any"
                      required
                      {...register("takeProfit")}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      name="buy"
                      className="btn btn-block btn-success btn-lg"
                      style={{backgroundColor:"#28a745",border:"none"}}
                      defaultValue="Buy by Market"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrderForm;
