import React, { useState } from 'react';
import moment from 'moment';

const FilterContext = React.createContext();

const initialSelectContext = {
  contextMobilesSelected: {
  active_id: null,
  },
};

const initialDetailContext = {
  contextMobileMonitoringDetail: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  transaction_status: '',
  },
};
const initialContext = {
  contextGeneral: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  },
  contextConsignments: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  },
  contextAssignments: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  },
  contextMobiles: {
  page: 1,
  pageSize: 10,
  sort_by: '_mobile_id',
  sort_desc: 'DESC',
  date_to: moment()
    .endOf('day')
    .format('YYYY-MM-DD'),
  date_from: moment()
    .startOf('day')
    // .subtract('1', 'day')
    .format('YYYY-MM-DD'),
  },
  contextTLAppointment: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  activetab: 'ALL',
  },
  contextTLTrip: {
  page: 1,
  pageSize: 10,
  sort_by: 'trip_log_id',
  sort_desc: 'DESC',
  date_from: moment(new Date()).format('YYYY-MM-DD'),
  date_to: moment(new Date()).format('YYYY-MM-DD'),
  },
  contextTripLogDetail: {
  page: 1,
  pageSize: 10,
  sort_by: 'created_at',
  sort_desc: 'DESC',
  },
};
function FilterProvider({ children }) {
  const [filterConfig, setContext] = useState(initialContext);
  const [detailConfig, setDetailContext] = useState(initialDetailContext);
  const [selectionConfig, setSelectContext] = useState(initialSelectContext);
  const [isLoading, setIsLoading] = useState(false);

  function setContextValue(body, context = 'contextGeneral') {
  context === 'reset'
    ? setContext(initialContext)
    : setContext({ ...filterConfig, [context]: { ...body } });
  }

  function setDetailContextValue(
  body,
  context = 'contextMobileMonitoringDetail',
  ) {
  context === 'reset'
    ? setDetailContext(initialDetailContext)
    : setDetailContext({ ...detailConfig, [context]: { ...body } });
  }

  function setSelectContextValue(body, context = 'contextMobilesSelected') {
  context === 'reset'
    ? setSelectContext(initialSelectContext)
    : setSelectContext({ ...filterConfig, [context]: { ...body } });
  }

  return (
  <FilterContext.Provider
    value={{
    filterConfig,
    setContextValue,
    //SELECTION //  we separate the selection context to avoid unecessary calls on use effects
    selectionConfig,
    setSelectContextValue,
    // DETAIL //  we separate the selection context to avoid unecessary calls on use effects
    detailConfig,
    setDetailContextValue,
    initialContext,
    initialSelectContext,
    initialDetailContext,
    isLoading,
    setIsLoading,
    }}
  >
    {children}
  </FilterContext.Provider>
  );
}

export { FilterProvider, FilterContext };
