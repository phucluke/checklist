export function codeReviewList() {
  const rawList = `
# General
- Make sure all UT must be passed 
- Following Coding Standard
- Run brakeman(Rails Security Scanner)
- Inspect code with RubyMine
- SQL Injection
- Cross-Site Scripting (XSS)
- CSS Inline
- Authentication and Authorization
- N + 1 Query
- Sanitize Raw SQL
# Common Issues
- Missing input form validation on UI
- Path traversal with uploads
- Internal file path disclosure
`;

  let list = [];
  let currentCategory = "Uncategorized";

  for (let line of rawList.split("\n")) {
    line = line.trim();
    if (line.substr(0, 1) === "#") {
      currentCategory = line.replace("#", "").trim();
      list[currentCategory] = [];
    }
    if (line.substr(0, 1) === "-") {
      line = line.replace("-", "").trim();
      list[currentCategory].push(line);
    }
  }

  return list;
}
