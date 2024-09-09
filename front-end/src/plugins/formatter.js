Date.prototype.dateFormatter = function (f) {
  if (!this.valueOf()) return " ";
  if (!f) return this;

  const weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const shortWeekName = ["일", "월", "화", "수", "목", "금", "토"];
  const self = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function (formater) {
    let h = 0;
    switch (formater) {
      case "yyyy":
        return self.getFullYear();
      case "yy":
        return (self.getFullYear() % 1000).zf(2);
      case "MM":
        return (self.getMonth() + 1).zf(2);
      case "dd":
        return self.getDate().zf(2);
      case "E":
        return weekName[self.getDay()];
      case "e":
        return shortWeekName[self.getDay()];
      case "HH":
        return self.getHours().zf(2);
      case "hh":
        return ((h = self.getHours() % 12) ? h : 12).zf(2);
      case "mm":
        return self.getMinutes().zf(2);
      case "ss":
        return self.getSeconds().zf(2);
      case "a/p":
        return self.getHours() < 12 ? "오전" : "오후";
      default:
        return formater;
    }
  });
};

String.prototype.zf = function (len) {
  return "0".repeat(len - this.length) + this;
};

Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

String.prototype.dateFormat = function (f) {
  const date = new Date(this);
  return date == "invalid Date" ? "" : date.dateFormatter(f);
};

Number.prototype.numberFormat = function () {
  if (this == 0) return 0;
  const reg = /(^[+-]?\d+)(\d{3})/;

  let n = `${this}`;
  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");
  return n;
};
