import { ApiHelper } from "../appBase/helpers"

export class EnvironmentHelper {
  private static AccessApi = "";
  private static AttendanceApi = "";
  private static GivingApi = "";
  private static MembershipApi = "";
  static AppUrl = "";
  static AccountsAppUrl = "";
  static ChurchAppUrl = "";
  static ChurchId = "";

  private static StreamingLiveApi = "";
  static SubUrl = "";

  static GoogleAnalyticsTag = "";
  static StripePK = "";

  static init = () => {
    switch (process.env.REACT_APP_STAGE) {
      case "staging": EnvironmentHelper.initStaging(); break;
      case "prod": EnvironmentHelper.initProd(); break;
      default: EnvironmentHelper.initDev(); break;
    }
    ApiHelper.apiConfigs = [
      { keyName: "AccessApi", url: EnvironmentHelper.AccessApi, jwt: "", permisssions: [] },
      { keyName: "AttendanceApi", url: EnvironmentHelper.AttendanceApi, jwt: "", permisssions: [] },
      { keyName: "GivingApi", url: EnvironmentHelper.GivingApi, jwt: "", permisssions: [] },
      { keyName: "MembershipApi", url: EnvironmentHelper.MembershipApi, jwt: "", permisssions: [] },
      { keyName: "StreamingLiveApi", url: EnvironmentHelper.StreamingLiveApi, jwt: "", permisssions: [] }
    ];
  }

  static initDev = () => {
    EnvironmentHelper.AccessApi = process.env.REACT_APP_ACCESS_API || "";
    EnvironmentHelper.AttendanceApi = process.env.REACT_APP_ATTENDANCE_API || "";
    EnvironmentHelper.GivingApi = process.env.REACT_APP_GIVING_API || "";
    EnvironmentHelper.MembershipApi = process.env.REACT_APP_MEMBERSHIP_API || "";
    EnvironmentHelper.GoogleAnalyticsTag = process.env.REACT_APP_GOOGLE_ANALYTICS || "";
    EnvironmentHelper.AppUrl = process.env.REACT_APP_APP_URL || ""
    EnvironmentHelper.StreamingLiveApi = process.env.REACT_APP_STREAMINGLIVE_API || "";
    EnvironmentHelper.SubUrl = process.env.REACT_APP_SUB_URL;
    EnvironmentHelper.AccountsAppUrl = process.env.REACT_APP_ACCOUNTS_URL;
    EnvironmentHelper.ChurchAppUrl = process.env.REACT_APP_CHURCH_APPS_URL;
    EnvironmentHelper.StripePK = process.env.REACT_APP_STRIPE_PK;
    EnvironmentHelper.ChurchId = process.env.REACT_APP_CHURCH_ID;
  }

  //NOTE: None of these values are secret.
  static initStaging = () => {
    EnvironmentHelper.AccessApi = "https://accessapi.staging.churchapps.org";
    EnvironmentHelper.AttendanceApi = "https://attendanceapi.staging.churchapps.org";
    EnvironmentHelper.GivingApi = "https://givingapi.staging.churchapps.org";
    EnvironmentHelper.MembershipApi = "https://membershipapi.staging.churchapps.org";
    EnvironmentHelper.AppUrl = "https://app.staging.chums.org"
    EnvironmentHelper.GoogleAnalyticsTag = "";
    EnvironmentHelper.AppUrl = "https://app.staging.chums.org"
    EnvironmentHelper.StreamingLiveApi = "https://api.staging.streaminglive.church";
    EnvironmentHelper.SubUrl = "https://{key}.staging.streaminglive.church";
    EnvironmentHelper.AccountsAppUrl = "https://accounts.staging.churchapps.org"
    EnvironmentHelper.ChurchAppUrl = "https://staging.churchapps.org"
    EnvironmentHelper.StripePK = "pk_test_IsC6UPM4P5EZ6KAEorHwEMvU00M6ioef1d";
    EnvironmentHelper.ChurchId = "1";
  }

  //NOTE: None of these values are secret.
  static initProd = () => {
    EnvironmentHelper.AccessApi = "https://accessapi.churchapps.org";
    EnvironmentHelper.AttendanceApi = "https://attendanceapi.churchapps.org";
    EnvironmentHelper.GivingApi = "https://givingapi.churchapps.org";
    EnvironmentHelper.MembershipApi = "https://membershipapi.churchapps.org";
    EnvironmentHelper.AppUrl = "https://app.chums.org"
    EnvironmentHelper.GoogleAnalyticsTag = "UA-164774603-5";
    EnvironmentHelper.AppUrl = "https://app.chums.org"
    EnvironmentHelper.StreamingLiveApi = "https://api.streaminglive.church";
    EnvironmentHelper.SubUrl = "https://{key}.streaminglive.church";
    EnvironmentHelper.AccountsAppUrl = "https://accounts.churchapps.org"
    EnvironmentHelper.ChurchAppUrl = "https://churchapps.org"
    EnvironmentHelper.StripePK = "pk_live_Ny9Jk8nPW2lRf7NTjTg8QiBt00D4bjTh3y";
    EnvironmentHelper.ChurchId = "40";
  }

}

