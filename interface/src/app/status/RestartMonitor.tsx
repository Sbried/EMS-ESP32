import { useState } from 'react';

import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material';

import { readSystemStatus } from 'api/system';

import { dialogStyle } from 'CustomTheme';
import { useRequest } from 'alova/client';
import MessageBox from 'components/MessageBox';
import { useI18nContext } from 'i18n/i18n-react';
import { useInterval } from 'utils';

const RestartMonitor = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const { LL } = useI18nContext();

  let count = 0;

  const { data, send } = useRequest(readSystemStatus, {
    force: true,
    initialData: { status: 'Getting ready...' },
    async middleware(_, next) {
      if (count++ >= 1) {
        // skip first request (1 second) to allow AsyncWS to send its response
        await next();
      }
    }
  })
    .onSuccess((event) => {
      if (event.data.status === 'ready' || event.data.status === undefined) {
        document.location.href = '/';
      }
    })
    .onError((error) => {
      setErrorMessage(error.message);
    });

  useInterval(() => {
    void send();
  }, 1000); // check every second

  return (
    <Dialog fullWidth={true} sx={dialogStyle} open={true}>
      <DialogContent dividers>
        <Box m={0} py={0} display="flex" alignItems="center" flexDirection="column">
          <Typography
            color="secondary"
            variant="h6"
            fontWeight={400}
            textAlign="center"
          >
            {data?.status === 'uploading'
              ? LL.WAIT_FIRMWARE()
              : data?.status === 'restarting'
                ? LL.APPLICATION_RESTARTING()
                : data?.status === 'ready'
                  ? LL.RESTARTING_PRE()
                  : LL.RESTARTING_POST()}
            &hellip;
          </Typography>
          <Typography mt={2} variant="h6" fontWeight={400} textAlign="center">
            {LL.PLEASE_WAIT()}
          </Typography>

          {errorMessage ? (
            <MessageBox my={2} level="error" message={errorMessage} />
          ) : (
            <Box py={2}>
              <CircularProgress size={32} />
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RestartMonitor;
