$(function () {
  const timerMaxDelay = 5 * 60;
  // const timerMaxDelay = 1 * 60;
  let timerRemaining = 0;

  //탭 메뉴 이동,문서타이틀바꾸기
  $(".form").eq(0).addClass("d-flex");
  $(".dataTbForm").eq(0).addClass("d-block");
  // $("menu > h1:not(.current)").on("click", function (e) {
  //   location.href = _ctx + "managers";
  // });

  const contextMenu = $('#contextMenu');
  const contextMenuCallback = function (data) {
    const clickRow = emergencyTable.row(data);
    const clickData = clickRow.data();
    console.log(clickData)

    if(clickData !== undefined) {
      contextMenu.on('click', '#study-change-radiologist', function () {

        let checkedArray = [];
        $('#emergency-table tbody tr input[type=checkbox]:checked').each((index, item) => {
          const inputTr = $(item).closest('tr');
          const data = emergencyTable.row(inputTr).data();
          console.log(data);
          if (data.studyStatusType === '20') {
            checkedArray.push(data);
          }
        });
        if (isEmpty(checkedArray)) {
          infoSwal('배정의 변경', '판독대기 상태의 의뢰만 배정의변경이 \n 가능합니다.', '');
          return false;
        }
        $('#rearrange-table').addClass('emergency');
        rearrangeTable.clear().rows.add(checkedArray).draw();

        // let checkedArray = [];
        // $('#emergency-table tr input[type=checkbox]:checked').each((index, item) => {
        //   const inputTr = $(item).closest('tr');
        //   const data = emergencyTable.row(inputTr).data();
        //   console.log(data);
        //   if (data.studyStatusType == '20') {
        //     checkedArray.push(data);
        //   }
        // });
        // if (isEmpty(checkedArray)) {
        //   infoSwal('배정의 변경', '판독대기 상태의 의뢰만 배정의변경이 \n 가능합니다.', '');
        //   return false;
        // }
        $('#rearrange-table').addClass('emergency');
        rearrangeTable.clear().rows.add(checkedArray).draw();
        $('#rearrangeRequestModal').modal('show');


      }).on('click', '#study-change-status', function () {
        $('#changeStatusRequestModal').addClass('emergency');
        changeStudyStatus(changeStatusTable);
        $('#changeStatusRequestModal').modal('show');

      }).on('click', '#study-change-studyType', function () {
        $('#changeStudyTypeRequestModal').addClass('emergency');
        changeStudyStatus(changeStudyTypeTable);
        $('#changeStudyTypeRequestModal').modal('show');
      }).on('click', '#study-change-urgentType', function () {
        $('#changeUrgentTypeRequestModal').addClass('emergency');
        changeStudyStatus(changeUrgentTypeTable);
        $('#changeUrgentTypeRequestModal').modal('show');
      }).on('click', '#study-change-useYN', function () {
        $('#changeUseYnRequestModal').addClass('emergency');
        changeStudyStatus(changeUseYnTable);
        $('#changeUseYnRequestModal').modal('show');
      }).on('click', '#study-change-patientInfo', function () {
        const checkedArray = checkedStudyArray();
        console.log(checkedArray.length);
        if(checkedArray.length !== 0) {
          if(checkedArray.length !== 1) {
            infoSwal('의뢰정보 변경', '변경할 의뢰정보 1개만 선택해주세요.', '');
          } else {
            console.log(checkedArray[0]);
            $('#form-patientInfo').html(patientInfoTemplate(checkedArray[0]));
            $('#chk-allChangeYN').prop('checked', false);

            $('#sendHospital-name-code').val(checkedArray[0].sendHospitalKorAlias + '('+checkedArray[0].sendHospitalCode+')');
            $('#change-sendHospitalCode').val(checkedArray[0].sendHospitalKorAlias + '('+checkedArray[0].sendHospitalCode+')');
            $('#sendHospital-name-code').addClass('emergency');
            $('#changePatientInfoModal').modal('show');
          }
        } else {
          infoSwal('의뢰정보 변경', '변경할 의뢰정보 1개만 선택해주세요.', '');
        }
      }).on('click', '#study-open-images', function () {
        console.log('viewer open');
        const list = checkedStudyIds();
        console.log(list.length)
        openSelectedImages(list, 'R');
      });
    }
    console.log('선택한 의뢰정보가 없습니다.')
  }
  createContextMenu(contextMenu, '#emergency-table', contextMenuCallback);
  getUrgentList();
  getReadingStudyList();

  // 5분 마다 목록 새로고침
  timerRemaining = timerMaxDelay;
  setInterval(function () {
    listRefreshTimer();
  }, 1000);

  $('.referral-emergency-refresh-btn').on('click', function () {
    // 새로고침 버튼을 눌렸다면 refresh, 카운트다운 다시 시작
    timerRemaining = 0;
    listRefresh();
  });

  function listRefresh() {
    console.log("Refresh Start.")
    getUrgentList();
    getReadingStudyList();
  }

  function displayRemainingTime() {
    let display = $('#refresh-countdown');
    let minutes, seconds;
    minutes = parseInt(timerRemaining / 60, 10);
    seconds = parseInt(timerRemaining % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);
  }

  function listRefreshTimer() {
    timerRemaining -= 1;

    if ( timerRemaining <= 0) {
      timerRemaining = timerMaxDelay;
      listRefresh();
    }
    displayRemainingTime();
  }

  // 브라우저 크기 조절되면 데이터테이블 다시 그리기
  // $(window).resize(function() {
  //   getUrgentList();
  //   getReadingStudyList();
  // })

  $('#emergency-table tbody').on('click', 'tr', function(event) {
    onClickRowTriggerChecked($(this), event);

    const rowData = emergencyTable.row(this).data();
    console.log(rowData);
    if(rowData !== undefined)
      getPatientList(rowData);
  });

  $('.dt-all-check').on('click', function (e) {
    const name = $(this).attr('name');
    const isChecked = $(this).is(':checked');
    $('#' + name).find('tr').each((index, item) => {
      if(isChecked) {
        $(item).addClass('selected');
      } else {
        $(item).removeClass('selected');
      }
      $(item).find('.chk-all').prop('checked', isChecked);
    })
  });

  loadReadingDrList($('#select-rearrange-reading-dr-list'));

  //중복 제거
  $('#referral-emergency-duplicate-btn').on('click', function () {
    $('#duplicateRequestModal').modal('show');
  });

  $('#duplicateRequestModal').on('shown.bs.modal', function () {
    refreshDuplicateLists();

  }).on('hidden.bs.modal', function() {
  });

  $('#btn-apply-duplicate').on('click', function () {
    const list = checkedDuplicateStudyIds();
    if (0 < list.length) {
      let loginId = $('#loginId').val();
      console.log(JSON.stringify(list));
      $.ajax({
        url: _ctx + 'api/results/duplicates/apply/'+loginId,
        type: 'PUT',
        headers: {"X-CSRF-TOKEN": token},
        data: JSON.stringify(list),
        contentType: 'application/json',
      }).done(function (response) {
        console.log(response.code);
        if (response.code === 200) {
          refreshDuplicateLists();
        }
      }).fail(function (xhr, error, status) {
        console.log("error - xhr: " + xhr + ", status: " + status + ", error: " + error);
      })
    } else {
      infoSwal('중복제거', '선택한 중복제거 항목이 없습니다.', '');
    }

  });

  $('#open-detail').on('click', function () {
    console.log("open-detail");

    const list = checkedStudyIds();
    console.log(list.length);

    list.forEach(function (item, index, array) {
      console.log("open item : " + item);
      window.open(
          _ctx + 'managers/' + item,
          // '_blank'
          'detail_'+item
      );
    });
  })
});

function getUrgentList() {
  console.log("getUrgentList");
  const reportHospitalCode = $('#report-hospital-code').val();
  $.ajax({
    url: _ctx + 'api/results/urgentList/' + reportHospitalCode,
    type: 'GET',
  }).done(function (response) {
    emergencyTable.clear().rows.add(response).draw();
  }).fail(function(xhr, error, status) {
    console.log("error - xhr: " + xhr + ", status: " + status + ", error: " + error);
  });
}

function getPatientList(rowData) {
  const reportHospitalCode = $('#report-hospital-code').val();
  const params = '?sendHospitalCode=' + rowData.sendHospitalCode
    + '&patientId=' + rowData.patientId
   +'&studyId=' + rowData.studyId;

  $.ajax({
    url: _ctx + 'api/results/patientList/' + reportHospitalCode + params,
    type: 'GET',
  }).done(function (response) {
    referenceTable.clear().rows.add(response).draw();
  }).fail(function(xhr, error, status) {
    console.log("error - xhr: " + xhr + ", status: " + status + ", error: " + error);
  });
}

function getReadingStudyList() {
  console.log("getReadingStudyList");
  const reportHospitalCode = $('#report-hospital-code').val();
  $.ajax({
    url: _ctx + 'api/results/readingStudyList/' + reportHospitalCode,
    type: 'GET',
  }).done(function (response) {
    statusTable.clear().rows.add(response).draw();
  }).fail(function(xhr, error, status) {
    console.log("error - xhr: " + xhr + ", status: " + status + ", error: " + error);
  });
}

function checkedStudyArray() {
  const checkedArray = [];
  $('#emergency-table tbody tr input[type=checkbox]:checked').each((index, item) => {
    const inputTr = $(item).closest('tr');
    const data = emergencyTable.row(inputTr).data();
    checkedArray.push(data);
  });
  return checkedArray;
}

function checkedStudyIds() {
  const checkedArray = [];
  $('#emergency-table tbody tr input[type=checkbox]:checked').each((index, item) => {
    const inputTr = $(item).closest('tr');
    const data = emergencyTable.row(inputTr).data();
    checkedArray.push(data.studyId);
  });
  return checkedArray;
}

function changeStudyStatus(dataTable) {
  const checkedArray = checkedStudyArray();
  dataTable.clear().rows.add(checkedArray).draw();
}

function refreshDuplicateLists() {
  displayLoadingBar(true, idSpinnerDuplicateStudy);
  let reportHospitalCode = $('#report-hospital-code').val();

  $.ajax({
    url: _ctx + 'api/results/duplicates/emergency/' + reportHospitalCode,
    type: 'GET',
    headers: {'X-CSRF-TOKEN': token},
  }).done(function (list) {
    reloadDuplicateStudyList(list);
    displayLoadingBar(false, idSpinnerDuplicateStudy);
  }).fail(function (error) {
    displayLoadingBar(false, idSpinnerDuplicateStudy);
  });
}

function addSelectedData(dataTable) {
  const checkedArray = checkedStudyArray();
  dataTable.clear().rows.add(checkedArray).draw();
}

Handlebars.registerHelper('findSelectedValue', function(value, options) {
  console.log(value);
  const $el = $('<select />').html(options.fn(this));
  $el.find('[value="' + value + '"]').attr({'selected': 'selected'});
  return $el.html();
});

function onClickRowTriggerChecked(row, event) {
  row.toggleClass('selected');
  const checkbox = row.find('td:first-child :checkbox');
  if(event.target.type === 'checkbox')
    return
  checkbox.prop('checked', !checkbox.is(':checked'));
}