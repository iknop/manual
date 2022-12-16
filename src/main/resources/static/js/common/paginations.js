Handlebars.registerHelper('operations', function(operator) {
  let result;
  const param = operator.hash;
  switch (param.operator) {
    case '+':
      result = param.value1 + param.value2;
      break;
    case '-':
      result = param.value1 - param.value2;
      break;
    default:
      result = '';
      break;
  }
  return result;
});

Handlebars.registerHelper('isEqualsNumber', function(value, number) {
  return value === parseInt(number);
})

Handlebars.registerHelper('indexArray', function() {
  const indexArray = [];
  let indexJson = {};
  let totalPage, blockPage;
  if(this.number % 10 === 0) {
    blockPage = Math.floor((this.number - 1) / 10) * 10;
  } else {
    blockPage = Math.floor(this.number / 10) * 10;
  }
  if(this.totalCount % this.size === 0) {
    totalPage = Math.floor(this.totalCount / this.size);
  } else {
    totalPage = Math.floor(this.totalCount / this.size) + 1;
  }
  for(let i=blockPage + 1; i <= blockPage + 10; i++) {
    if(i > totalPage) {
      break;
    }
    indexJson = { index: i, number: this.number, size: this.size }
    indexArray.push(indexJson);
  }
  return indexArray;
});

Handlebars.registerHelper('findSelectedValue', function(value, options) {
  const $el = $('<select />').html(options.fn(this));
  $el.find('[value="' + value + '"]').attr({'selected': 'selected'});
  return $el.html();
});

const paginationTemplate = Handlebars.compile($('#template-pagination').html());
const rowCountTemplate = Handlebars.compile($('#template-row-count').html());

function initPagination(totalCount, number, size) {
  const totalPage = Math.floor(totalCount / size);
  $('#pagination-content').html(paginationTemplate({
    totalCount: totalCount,
    number: number,
    first: number === 1,
    last: number === (totalCount % 10 === 0 ? totalPage : totalPage + 1),
    size: size
  }));
}

function initRowCount(page, size) {
  $('#row-count-content').html(rowCountTemplate({
    page: page,
    size: size
  }));
}

function createPaginationAndRowCount(data,size) {
  let totalCount, number;
  if(data.length !== 0) {
    totalCount = data[0].totCnt;
    number = data[0].listNo;
    if(number === undefined) {
      number = data[0].no;
    }
    if(number === undefined) {
      number = data[0].studyNo;
    }
    number = Math.floor(number / size) + 1;
  } else {
    totalCount = 1;
    number = 1;
  }
  initPagination(totalCount, number, size);
  initRowCount(number, size);
}