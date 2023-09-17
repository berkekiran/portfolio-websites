import { useEffect, useRef, useState } from 'react';
import constate from 'constate';
import { Setting } from '@prisma/client';
import axios from 'axios';

const [SettingsContextProvider, useSettingsContext] = constate(() => {
  const [settings, setSettings] = useState<Setting | null>(null);
  const settingsFetched = useRef(false);

  useEffect(() => {
      if(settingsFetched.current === false) {
          const getSettings = async () => {
              const settingsRawData = await axios.get('/api/settings');
              setSettings(settingsRawData.data[0]);
          };

          getSettings();
      }

      return() => {
          settingsFetched.current = true;
      }
  }, []);

  return {
    settings,
    setSettings
  };
});

export { SettingsContextProvider, useSettingsContext };