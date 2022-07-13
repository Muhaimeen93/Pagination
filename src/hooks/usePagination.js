export const DOTS = "...";

function usePagination({currentPage,totalCount,pageSize}) {
  const firstPage=1;
  const lastPage=Math.ceil(totalCount/pageSize);
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    This hook controls the Pagination ranges in terms of total blog clount, blogs per page and current page.
    It returns the page ranges in terms of the current page. 

    If the first page and last page are same, it returns only one page number.
    If there are only two pages, it only returns the first and last page number.
    If there are only three pages, it only returns the first, second and last page number.
    If the current page is either the first page or second page, it returns the first 3 page number, an ellipse and the last page number.
    If the current page is either the last page or second last page, it returns the the first page number, an ellipse and the last 3 page numbers.
    for all other conditions, it returns first page, ellipese, then current page and its two siblings, ellipses and last page.
    
  */
  if(firstPage==lastPage)
    return [firstPage];
  else if(firstPage+1==lastPage)
    return [firstPage,lastPage];
  else if(firstPage+2==lastPage)
    return [firstPage,firstPage+1,lastPage];
  else if(firstPage==currentPage || firstPage+1==currentPage)
    return [firstPage,firstPage+1,firstPage+2, DOTS, lastPage];
  else if(lastPage==currentPage || lastPage-1==currentPage)
    return [firstPage,DOTS,lastPage-2,lastPage-1,lastPage];
  return [firstPage,DOTS,currentPage-1,currentPage,currentPage+1, DOTS, lastPage];
}

export default usePagination;
