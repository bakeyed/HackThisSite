let largeHexArray = [
  0x3c, 0x62, 0x75, 0x74, 0x74, 0x6f, 0x6e, 0x20, 0x6f, 0x6e, 0x63, 0x6c, 0x69,
  0x63, 0x6b, 0x3d, 0x27, 0x6a, 0x61, 0x76, 0x61, 0x73, 0x63, 0x72, 0x69, 0x70,
  0x74, 0x3a, 0x69, 0x66, 0x20, 0x28, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e,
  0x74, 0x2e, 0x67, 0x65, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x42,
  0x79, 0x49, 0x64, 0x28, 0x22, 0x70, 0x61, 0x73, 0x73, 0x22, 0x29, 0x2e, 0x76,
  0x61, 0x6c, 0x75, 0x65, 0x3d, 0x3d, 0x22, 0x6a, 0x30, 0x30, 0x77, 0x31, 0x6e,
  0x22, 0x29, 0x7b, 0x61, 0x6c, 0x65, 0x72, 0x74, 0x28, 0x22, 0x59, 0x6f, 0x75,
  0x20, 0x57, 0x49, 0x4e, 0x21, 0x22, 0x29, 0x3b, 0x77, 0x69, 0x6e, 0x64, 0x6f,
  0x77, 0x2e, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x2b, 0x3d,
  0x20, 0x22, 0x3f, 0x6c, 0x76, 0x6c, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f,
  0x72, 0x64, 0x3d, 0x22, 0x2b, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74,
  0x2e, 0x67, 0x65, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x42, 0x79,
  0x49, 0x64, 0x28, 0x22, 0x70, 0x61, 0x73, 0x73, 0x22, 0x29, 0x2e, 0x76, 0x61,
  0x6c, 0x75, 0x65, 0x7d, 0x65, 0x6c, 0x73, 0x65, 0x20, 0x7b, 0x61, 0x6c, 0x65,
  0x72, 0x74, 0x28, 0x22, 0x57, 0x52, 0x4f, 0x4e, 0x47, 0x21, 0x20, 0x54, 0x72,
  0x79, 0x20, 0x61, 0x67, 0x61, 0x69, 0x6e, 0x21, 0x22, 0x29, 0x7d, 0x27, 0x3e,
  0x43, 0x68, 0x65, 0x63, 0x6b, 0x20, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
  0x64, 0x3c, 0x2f, 0x62, 0x75, 0x74, 0x74, 0x6f, 0x6e, 0x3e,
];
let result = largeHexArray.map((h) => String.fromCharCode(h)).join("");
console.log(result);
