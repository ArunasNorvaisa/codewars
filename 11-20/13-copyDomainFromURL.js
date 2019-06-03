/*
 Write a function that when given a URL as a string, parses out just
 the domain name and returns it as a string. For example:

 domainName("http://github.com/carbonfive/raygun") == "github"
 domainName("http://www.zombie-bites.com") == "zombie-bites"
 domainName("https://www.cnet.com") == "cnet"
 */

const domainName = url => {
  url = url.replace(/https?:\/\//, '');
  url = url.replace('www.', '');
  return url.split('.')[0];
};

// Not the best solution though... :( I prefer:
// return url.match(/(?!w)+[\w-]+(?=\.)/)[0];
// It still does not cover SO MANY cases though (like http://www.com)...

domainName("http://goo-gle.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
