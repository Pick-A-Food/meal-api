$(document).ready(function() {
    var url = "https://open.neis.go.kr/hub/mealServiceDietInfo?";
    const key = "2e191712000e470dac71cace19e334d9";
    const type = "json";
    const pIndex = 1;
    const pSize = 100;
    const ATPT_OFCDC_SC_CODE = "B10";
    const SD_SCHUL_CODE = 7061058;
    const MLSV_FROM_YMD = "20220425";
    const MLSV_TO_YMD = "20220429";
    const param = `KEY=${key}&Type=${type}&pIndex=${pIndex}&pSize=${pSize}&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${SD_SCHUL_CODE}&MLSV_FROM_YMD=${MLSV_FROM_YMD}&MLSV_TO_YMD=${MLSV_TO_YMD}`;
    $('.btn').click(function() {
        $.ajax({
            url: url + param,
            type:"GET",
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        });
    });
});


