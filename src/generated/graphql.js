"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalSettleAmountOrderByInput = exports.TotalSettleAmountByNumberOrderByInput = exports.TicketBoughtOrderByInput = exports.RoundWinnerOrderByInput = exports.RandomNumberGeneratedOrderByInput = exports.LotteryRoundOrderByInput = void 0;
var LotteryRoundOrderByInput;
(function (LotteryRoundOrderByInput) {
    LotteryRoundOrderByInput["BlockHashAsc"] = "blockHash_ASC";
    LotteryRoundOrderByInput["BlockHashDesc"] = "blockHash_DESC";
    LotteryRoundOrderByInput["DelayAsc"] = "delay_ASC";
    LotteryRoundOrderByInput["DelayDesc"] = "delay_DESC";
    LotteryRoundOrderByInput["EndAsc"] = "end_ASC";
    LotteryRoundOrderByInput["EndDesc"] = "end_DESC";
    LotteryRoundOrderByInput["IdAsc"] = "id_ASC";
    LotteryRoundOrderByInput["IdDesc"] = "id_DESC";
    LotteryRoundOrderByInput["LengthAsc"] = "length_ASC";
    LotteryRoundOrderByInput["LengthDesc"] = "length_DESC";
    LotteryRoundOrderByInput["MinPriceAsc"] = "minPrice_ASC";
    LotteryRoundOrderByInput["MinPriceDesc"] = "minPrice_DESC";
    LotteryRoundOrderByInput["RandomNumberGeneratedBlockHashAsc"] = "randomNumberGenerated_blockHash_ASC";
    LotteryRoundOrderByInput["RandomNumberGeneratedBlockHashDesc"] = "randomNumberGenerated_blockHash_DESC";
    LotteryRoundOrderByInput["RandomNumberGeneratedIdAsc"] = "randomNumberGenerated_id_ASC";
    LotteryRoundOrderByInput["RandomNumberGeneratedIdDesc"] = "randomNumberGenerated_id_DESC";
    LotteryRoundOrderByInput["RandomNumberGeneratedNumberAsc"] = "randomNumberGenerated_number_ASC";
    LotteryRoundOrderByInput["RandomNumberGeneratedNumberDesc"] = "randomNumberGenerated_number_DESC";
    LotteryRoundOrderByInput["RandomNumberGeneratedTimestampAsc"] = "randomNumberGenerated_timestamp_ASC";
    LotteryRoundOrderByInput["RandomNumberGeneratedTimestampDesc"] = "randomNumberGenerated_timestamp_DESC";
    LotteryRoundOrderByInput["RateAsc"] = "rate_ASC";
    LotteryRoundOrderByInput["RateDesc"] = "rate_DESC";
    LotteryRoundOrderByInput["RepeatAsc"] = "repeat_ASC";
    LotteryRoundOrderByInput["RepeatDesc"] = "repeat_DESC";
    LotteryRoundOrderByInput["RoundAsc"] = "round_ASC";
    LotteryRoundOrderByInput["RoundDesc"] = "round_DESC";
    LotteryRoundOrderByInput["StartAsc"] = "start_ASC";
    LotteryRoundOrderByInput["StartDesc"] = "start_DESC";
})(LotteryRoundOrderByInput = exports.LotteryRoundOrderByInput || (exports.LotteryRoundOrderByInput = {}));
var RandomNumberGeneratedOrderByInput;
(function (RandomNumberGeneratedOrderByInput) {
    RandomNumberGeneratedOrderByInput["BlockHashAsc"] = "blockHash_ASC";
    RandomNumberGeneratedOrderByInput["BlockHashDesc"] = "blockHash_DESC";
    RandomNumberGeneratedOrderByInput["IdAsc"] = "id_ASC";
    RandomNumberGeneratedOrderByInput["IdDesc"] = "id_DESC";
    RandomNumberGeneratedOrderByInput["NumberAsc"] = "number_ASC";
    RandomNumberGeneratedOrderByInput["NumberDesc"] = "number_DESC";
    RandomNumberGeneratedOrderByInput["RoundBlockHashAsc"] = "round_blockHash_ASC";
    RandomNumberGeneratedOrderByInput["RoundBlockHashDesc"] = "round_blockHash_DESC";
    RandomNumberGeneratedOrderByInput["RoundDelayAsc"] = "round_delay_ASC";
    RandomNumberGeneratedOrderByInput["RoundDelayDesc"] = "round_delay_DESC";
    RandomNumberGeneratedOrderByInput["RoundEndAsc"] = "round_end_ASC";
    RandomNumberGeneratedOrderByInput["RoundEndDesc"] = "round_end_DESC";
    RandomNumberGeneratedOrderByInput["RoundIdAsc"] = "round_id_ASC";
    RandomNumberGeneratedOrderByInput["RoundIdDesc"] = "round_id_DESC";
    RandomNumberGeneratedOrderByInput["RoundLengthAsc"] = "round_length_ASC";
    RandomNumberGeneratedOrderByInput["RoundLengthDesc"] = "round_length_DESC";
    RandomNumberGeneratedOrderByInput["RoundMinPriceAsc"] = "round_minPrice_ASC";
    RandomNumberGeneratedOrderByInput["RoundMinPriceDesc"] = "round_minPrice_DESC";
    RandomNumberGeneratedOrderByInput["RoundRateAsc"] = "round_rate_ASC";
    RandomNumberGeneratedOrderByInput["RoundRateDesc"] = "round_rate_DESC";
    RandomNumberGeneratedOrderByInput["RoundRepeatAsc"] = "round_repeat_ASC";
    RandomNumberGeneratedOrderByInput["RoundRepeatDesc"] = "round_repeat_DESC";
    RandomNumberGeneratedOrderByInput["RoundRoundAsc"] = "round_round_ASC";
    RandomNumberGeneratedOrderByInput["RoundRoundDesc"] = "round_round_DESC";
    RandomNumberGeneratedOrderByInput["RoundStartAsc"] = "round_start_ASC";
    RandomNumberGeneratedOrderByInput["RoundStartDesc"] = "round_start_DESC";
    RandomNumberGeneratedOrderByInput["TimestampAsc"] = "timestamp_ASC";
    RandomNumberGeneratedOrderByInput["TimestampDesc"] = "timestamp_DESC";
})(RandomNumberGeneratedOrderByInput = exports.RandomNumberGeneratedOrderByInput || (exports.RandomNumberGeneratedOrderByInput = {}));
var RoundWinnerOrderByInput;
(function (RoundWinnerOrderByInput) {
    RoundWinnerOrderByInput["IdAsc"] = "id_ASC";
    RoundWinnerOrderByInput["IdDesc"] = "id_DESC";
    RoundWinnerOrderByInput["RoundBlockHashAsc"] = "round_blockHash_ASC";
    RoundWinnerOrderByInput["RoundBlockHashDesc"] = "round_blockHash_DESC";
    RoundWinnerOrderByInput["RoundDelayAsc"] = "round_delay_ASC";
    RoundWinnerOrderByInput["RoundDelayDesc"] = "round_delay_DESC";
    RoundWinnerOrderByInput["RoundEndAsc"] = "round_end_ASC";
    RoundWinnerOrderByInput["RoundEndDesc"] = "round_end_DESC";
    RoundWinnerOrderByInput["RoundIdAsc"] = "round_id_ASC";
    RoundWinnerOrderByInput["RoundIdDesc"] = "round_id_DESC";
    RoundWinnerOrderByInput["RoundLengthAsc"] = "round_length_ASC";
    RoundWinnerOrderByInput["RoundLengthDesc"] = "round_length_DESC";
    RoundWinnerOrderByInput["RoundMinPriceAsc"] = "round_minPrice_ASC";
    RoundWinnerOrderByInput["RoundMinPriceDesc"] = "round_minPrice_DESC";
    RoundWinnerOrderByInput["RoundRateAsc"] = "round_rate_ASC";
    RoundWinnerOrderByInput["RoundRateDesc"] = "round_rate_DESC";
    RoundWinnerOrderByInput["RoundRepeatAsc"] = "round_repeat_ASC";
    RoundWinnerOrderByInput["RoundRepeatDesc"] = "round_repeat_DESC";
    RoundWinnerOrderByInput["RoundRoundAsc"] = "round_round_ASC";
    RoundWinnerOrderByInput["RoundRoundDesc"] = "round_round_DESC";
    RoundWinnerOrderByInput["RoundStartAsc"] = "round_start_ASC";
    RoundWinnerOrderByInput["RoundStartDesc"] = "round_start_DESC";
    RoundWinnerOrderByInput["TicketBoughtAmountAsc"] = "ticketBought_amount_ASC";
    RoundWinnerOrderByInput["TicketBoughtAmountDesc"] = "ticketBought_amount_DESC";
    RoundWinnerOrderByInput["TicketBoughtBlockNumberAsc"] = "ticketBought_blockNumber_ASC";
    RoundWinnerOrderByInput["TicketBoughtBlockNumberDesc"] = "ticketBought_blockNumber_DESC";
    RoundWinnerOrderByInput["TicketBoughtIdAsc"] = "ticketBought_id_ASC";
    RoundWinnerOrderByInput["TicketBoughtIdDesc"] = "ticketBought_id_DESC";
    RoundWinnerOrderByInput["TicketBoughtNumberAsc"] = "ticketBought_number_ASC";
    RoundWinnerOrderByInput["TicketBoughtNumberDesc"] = "ticketBought_number_DESC";
    RoundWinnerOrderByInput["TicketBoughtTimestampAsc"] = "ticketBought_timestamp_ASC";
    RoundWinnerOrderByInput["TicketBoughtTimestampDesc"] = "ticketBought_timestamp_DESC";
    RoundWinnerOrderByInput["TicketBoughtTransactionHashAsc"] = "ticketBought_transactionHash_ASC";
    RoundWinnerOrderByInput["TicketBoughtTransactionHashDesc"] = "ticketBought_transactionHash_DESC";
    RoundWinnerOrderByInput["TicketBoughtWhoAsc"] = "ticketBought_who_ASC";
    RoundWinnerOrderByInput["TicketBoughtWhoDesc"] = "ticketBought_who_DESC";
})(RoundWinnerOrderByInput = exports.RoundWinnerOrderByInput || (exports.RoundWinnerOrderByInput = {}));
var TicketBoughtOrderByInput;
(function (TicketBoughtOrderByInput) {
    TicketBoughtOrderByInput["AmountAsc"] = "amount_ASC";
    TicketBoughtOrderByInput["AmountDesc"] = "amount_DESC";
    TicketBoughtOrderByInput["BlockNumberAsc"] = "blockNumber_ASC";
    TicketBoughtOrderByInput["BlockNumberDesc"] = "blockNumber_DESC";
    TicketBoughtOrderByInput["IdAsc"] = "id_ASC";
    TicketBoughtOrderByInput["IdDesc"] = "id_DESC";
    TicketBoughtOrderByInput["NumberAsc"] = "number_ASC";
    TicketBoughtOrderByInput["NumberDesc"] = "number_DESC";
    TicketBoughtOrderByInput["RoundWinnerIdAsc"] = "roundWinner_id_ASC";
    TicketBoughtOrderByInput["RoundWinnerIdDesc"] = "roundWinner_id_DESC";
    TicketBoughtOrderByInput["RoundBlockHashAsc"] = "round_blockHash_ASC";
    TicketBoughtOrderByInput["RoundBlockHashDesc"] = "round_blockHash_DESC";
    TicketBoughtOrderByInput["RoundDelayAsc"] = "round_delay_ASC";
    TicketBoughtOrderByInput["RoundDelayDesc"] = "round_delay_DESC";
    TicketBoughtOrderByInput["RoundEndAsc"] = "round_end_ASC";
    TicketBoughtOrderByInput["RoundEndDesc"] = "round_end_DESC";
    TicketBoughtOrderByInput["RoundIdAsc"] = "round_id_ASC";
    TicketBoughtOrderByInput["RoundIdDesc"] = "round_id_DESC";
    TicketBoughtOrderByInput["RoundLengthAsc"] = "round_length_ASC";
    TicketBoughtOrderByInput["RoundLengthDesc"] = "round_length_DESC";
    TicketBoughtOrderByInput["RoundMinPriceAsc"] = "round_minPrice_ASC";
    TicketBoughtOrderByInput["RoundMinPriceDesc"] = "round_minPrice_DESC";
    TicketBoughtOrderByInput["RoundRateAsc"] = "round_rate_ASC";
    TicketBoughtOrderByInput["RoundRateDesc"] = "round_rate_DESC";
    TicketBoughtOrderByInput["RoundRepeatAsc"] = "round_repeat_ASC";
    TicketBoughtOrderByInput["RoundRepeatDesc"] = "round_repeat_DESC";
    TicketBoughtOrderByInput["RoundRoundAsc"] = "round_round_ASC";
    TicketBoughtOrderByInput["RoundRoundDesc"] = "round_round_DESC";
    TicketBoughtOrderByInput["RoundStartAsc"] = "round_start_ASC";
    TicketBoughtOrderByInput["RoundStartDesc"] = "round_start_DESC";
    TicketBoughtOrderByInput["TimestampAsc"] = "timestamp_ASC";
    TicketBoughtOrderByInput["TimestampDesc"] = "timestamp_DESC";
    TicketBoughtOrderByInput["TransactionHashAsc"] = "transactionHash_ASC";
    TicketBoughtOrderByInput["TransactionHashDesc"] = "transactionHash_DESC";
    TicketBoughtOrderByInput["WhoAsc"] = "who_ASC";
    TicketBoughtOrderByInput["WhoDesc"] = "who_DESC";
})(TicketBoughtOrderByInput = exports.TicketBoughtOrderByInput || (exports.TicketBoughtOrderByInput = {}));
var TotalSettleAmountByNumberOrderByInput;
(function (TotalSettleAmountByNumberOrderByInput) {
    TotalSettleAmountByNumberOrderByInput["IdAsc"] = "id_ASC";
    TotalSettleAmountByNumberOrderByInput["IdDesc"] = "id_DESC";
    TotalSettleAmountByNumberOrderByInput["NumberAsc"] = "number_ASC";
    TotalSettleAmountByNumberOrderByInput["NumberDesc"] = "number_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundBlockHashAsc"] = "round_blockHash_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundBlockHashDesc"] = "round_blockHash_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundDelayAsc"] = "round_delay_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundDelayDesc"] = "round_delay_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundEndAsc"] = "round_end_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundEndDesc"] = "round_end_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundIdAsc"] = "round_id_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundIdDesc"] = "round_id_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundLengthAsc"] = "round_length_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundLengthDesc"] = "round_length_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundMinPriceAsc"] = "round_minPrice_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundMinPriceDesc"] = "round_minPrice_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundRateAsc"] = "round_rate_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundRateDesc"] = "round_rate_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundRepeatAsc"] = "round_repeat_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundRepeatDesc"] = "round_repeat_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundRoundAsc"] = "round_round_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundRoundDesc"] = "round_round_DESC";
    TotalSettleAmountByNumberOrderByInput["RoundStartAsc"] = "round_start_ASC";
    TotalSettleAmountByNumberOrderByInput["RoundStartDesc"] = "round_start_DESC";
    TotalSettleAmountByNumberOrderByInput["TotalAmountAsc"] = "totalAmount_ASC";
    TotalSettleAmountByNumberOrderByInput["TotalAmountDesc"] = "totalAmount_DESC";
})(TotalSettleAmountByNumberOrderByInput = exports.TotalSettleAmountByNumberOrderByInput || (exports.TotalSettleAmountByNumberOrderByInput = {}));
var TotalSettleAmountOrderByInput;
(function (TotalSettleAmountOrderByInput) {
    TotalSettleAmountOrderByInput["IdAsc"] = "id_ASC";
    TotalSettleAmountOrderByInput["IdDesc"] = "id_DESC";
    TotalSettleAmountOrderByInput["RoundBlockHashAsc"] = "round_blockHash_ASC";
    TotalSettleAmountOrderByInput["RoundBlockHashDesc"] = "round_blockHash_DESC";
    TotalSettleAmountOrderByInput["RoundDelayAsc"] = "round_delay_ASC";
    TotalSettleAmountOrderByInput["RoundDelayDesc"] = "round_delay_DESC";
    TotalSettleAmountOrderByInput["RoundEndAsc"] = "round_end_ASC";
    TotalSettleAmountOrderByInput["RoundEndDesc"] = "round_end_DESC";
    TotalSettleAmountOrderByInput["RoundIdAsc"] = "round_id_ASC";
    TotalSettleAmountOrderByInput["RoundIdDesc"] = "round_id_DESC";
    TotalSettleAmountOrderByInput["RoundLengthAsc"] = "round_length_ASC";
    TotalSettleAmountOrderByInput["RoundLengthDesc"] = "round_length_DESC";
    TotalSettleAmountOrderByInput["RoundMinPriceAsc"] = "round_minPrice_ASC";
    TotalSettleAmountOrderByInput["RoundMinPriceDesc"] = "round_minPrice_DESC";
    TotalSettleAmountOrderByInput["RoundRateAsc"] = "round_rate_ASC";
    TotalSettleAmountOrderByInput["RoundRateDesc"] = "round_rate_DESC";
    TotalSettleAmountOrderByInput["RoundRepeatAsc"] = "round_repeat_ASC";
    TotalSettleAmountOrderByInput["RoundRepeatDesc"] = "round_repeat_DESC";
    TotalSettleAmountOrderByInput["RoundRoundAsc"] = "round_round_ASC";
    TotalSettleAmountOrderByInput["RoundRoundDesc"] = "round_round_DESC";
    TotalSettleAmountOrderByInput["RoundStartAsc"] = "round_start_ASC";
    TotalSettleAmountOrderByInput["RoundStartDesc"] = "round_start_DESC";
    TotalSettleAmountOrderByInput["TotalAmountAsc"] = "totalAmount_ASC";
    TotalSettleAmountOrderByInput["TotalAmountDesc"] = "totalAmount_DESC";
})(TotalSettleAmountOrderByInput = exports.TotalSettleAmountOrderByInput || (exports.TotalSettleAmountOrderByInput = {}));
