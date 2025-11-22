১.Explain the difference between any, unknown, and never types in TypeScript.
any: any তে সব ধরনের ডেটা রাখা যায় । কিন্তু বড় প্রজেক্টে কাজ করার জন্য উপযোগী না।কারণ বড় প্রজক্টে বিভিন্ন ধরনের হাজার হাজার ডেটা নিয়ে কাজ করা লাগে সুতরাং ভূল হবার সম্ভাবনা বেশি।
unknown: unknow টাইপে যে কোন ডেটা ধরনের রাখা যায় কিন্তু ডেটা ব্যবহার করার সময় কোন টাইপের ডেটা ব্যবহার করছি চেক করে করে কাজ করতে হয় ।
never: কোন কিছু রিটার্ন করতে পারে না।
২.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
ফিক্সড ডেটা রাখা যাতে বার বার একই কোড লিখতে না হয় । 
enum Status {
  Success,
  Error, 
  Loading 
}

function getStatusMessage(status: Status) {
  if (status === Status.Success) {
    return status;
  }

  if (status === Status.Error) {
     return status;
  }

  if (status === Status.Loading) {
     return status;
  }
}

console.log(getStatusMessage(Status.Success));
console.log(getStatusMessage(Status.Error)); 
console.log(getStatusMessage(Status.Loading));

