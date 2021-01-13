import React, { useEffect } from "react";
import "./styles.scss";
import { useHistory, withRouter } from "react-router-dom";
// import { language } from "@store/language";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { clearToken, getInfoFromToken } from "@api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faLanguage,
  faKey,
  faSignInAlt,
  faGlobe,
  faArrowCircleLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// import { AuthStore } from "src/core/userCase/auth/node_modules/@store/auth";
import { CURRENT_LANGUAGE, LANGUAGE } from "@config/index";
import NotifiTranslate from "../NotifTranslate";
import Menu from "@components/commons/Menu/component/Menu";
import { Dropdown, Space } from "antd";
import {
  FlagOutlined,
  KeyOutlined,
  LogoutOutlined,
  MenuOutlined,
  AlignRightOutlined,
  CloseOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { LanguageAtom } from "@recoil/languageProject";
import { authAtom } from "@recoil/auth";
import { useTranslate } from "@hook/useTranslate";
import { UserTranslateKey } from "@translateKey/index";
const HeaderComponent = (props) => {
  const { menu } = props;
  const history = useHistory();
  const [language, setLanguage] = useRecoilState(LanguageAtom);
  const setLogin = useSetRecoilState(authAtom);

  // --------------THE USER SETTTING
  // const setOptionLanguage = useSetRecoilState(language);
  // const { accountInfo } = useRecoilValue(AuthStore)
  const handleLogout = () => {
    setLogin((pre) => ({ ...pre, privateLogin: false, name: "" }));
    clearToken();
    history.push("/login");
  };
  const element = (
    <Menu mode="inline" selectable={false}>
      <Menu.Item activeKey="email">
        {/* Email: {accountInfo?.email} */}
      </Menu.Item>
      <Menu.Item
        activeKey="logout"
        icon={<FontAwesomeIcon icon={faSignOutAlt} />}
        onClick={handleLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
    const {CHANGE_PASS, LOG_OUT, HI}= useTranslate(UserTranslateKey)
  //---------------THE NEW USER SETTING
  const menuUser = (
    <Menu>
      <Menu.Item key="1" icon={<KeyOutlined />}>
        <div>
          {CHANGE_PASS}
        </div>
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        <div>
          {LOG_OUT}
        </div>
      </Menu.Item>
    </Menu>
  );

  //--------------- ONLY LANGUAGE
  const handleChange = (value) => {
    localStorage.setItem(CURRENT_LANGUAGE, value);
    setLanguage(value);
  };
  const menuLanguage = (
    <Menu>
      {LANGUAGE.map((item: string) => (
        <Menu.Item
          key="1"
          icon={<FlagOutlined />}
          className={`${item == language ? " bg-red-700 text-white" : ""}`}
          onClick={() => handleChange(item)}
        >
          <div>{item}</div>
        </Menu.Item>
      ))}
    </Menu>
  );
  
  const userInfo:any = getInfoFromToken();
  useEffect(() => {
    const languageStore = localStorage.getItem(CURRENT_LANGUAGE) || "USA";
    LANGUAGE.includes(languageStore)
      ? handleChange(languageStore)
      : handleChange("USA");
  }, []);
  useEffect(() => {}, []);
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container flex items-center">
          <div className="flex-auto icon-menu">
            {React.createElement(
              props.toogleSider ? CloseOutlined : AlignRightOutlined,
              {
                className: "trigger icon-custom",
                onClick: props.toggle,
              }
            )}
          </div>
          <Space wrap className="">
            <Dropdown
              className="bg-white"
              overlay={menuLanguage}
              placement="bottomCenter"
            >
              <FontAwesomeIcon
                color="fff"
                size="2x"
                className="w-12 h-12 p-3 bg-gray-200 rounded-full"
                style={{ cursor: "pointer" }}
                icon={faGlobe}
              />
            </Dropdown>
            <div className="text-right mx-3 pl-5 border-l-2">
              <p className="text-sm text-gray-500">{HI}</p>
              <h3 className="text-lg">{userInfo.UserName}</h3>
            </div>
            <Dropdown
              className="bg-white"
              overlay={menuUser}
              placement="bottomCenter"
            >
              <div className="border-icon">
                <FontAwesomeIcon
                  color="fff"
                  size="2x"
                  style={{ cursor: "pointer" }}
                  icon={faUser}
                />
              </div>
            </Dropdown>
          </Space>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(HeaderComponent);
