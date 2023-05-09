import _ from 'lodash'
export const paginate = (items,pageNumber,pageSize)=>{
    const startIndex = (pageNumber - 1) * pageSize;
    return _(item).slice(startIndex).take(pageSize).value()
}