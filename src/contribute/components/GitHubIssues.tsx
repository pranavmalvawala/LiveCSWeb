import React from "react";
import { GitHubIssue } from "../../helpers";

interface Props { repoNames: string[] }

export const GitHubIssues: React.FC<Props> = (props) => {
  const [issues, setIssues] = React.useState<GitHubIssue[]>([]);

  const getAnonymous = async (url: string) => {
    try {
      const requestOptions = { method: "GET" };
      return fetch(url, requestOptions).then(response => response.json())
    } catch (e) {
      throw (e);
    }
  }

  const loadData = React.useCallback(() => {
    const promises: Promise<any>[] = [];
    props.repoNames.forEach(repo => {
      const url = "https://api.github.com/repos/LiveChurchSolutions/" + repo + "/issues?state=open";
      promises.push(getAnonymous(url))
    });

    Promise.all(promises).then((responses: any[]) => {

      const result: GitHubIssue[] = [];
      responses.forEach((resp: any[]) => {
        try {
          resp.forEach((item: any) => {
            result.push({
              repoName: item.repository_url.replace("https://api.github.com/repos/LiveChurchSolutions/", ""),
              title: item.title,
              url: item.html_url,
              number: item.number
            });
          });
        } catch {
          //rate limit
        }
      });
      setIssues(result);
    });
  }, [props.repoNames]);

  const getItems = () => {
    const result: JSX.Element[] = [];
    issues.forEach(issue => {
      result.push(<tr>
        <td>{issue.repoName}</td>
        <td><a href={issue.url}>{issue.title}</a></td>
      </tr>);

    });
    return <>{result}</>
  }

  React.useEffect(() => { loadData() }, [props.repoNames, loadData]);

  if (issues.length === 0) return <></>;
  else {
    return (
      <>
        <h4>Open Issues</h4>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            {getItems()}
          </tbody>
        </table>
      </>
    )
  }

}
