/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {UIAuthConfig, MeAPIResponse, AuthApiResponse} from '@asgardeo/js';

interface AuthContext {
  accessToken: string;
  authResponse: AuthApiResponse;
  config: UIAuthConfig;
  isAuthLoading: boolean;
  isSignedIn: boolean | undefined;
  isBrandingLoading: boolean;
  isComponentLoading: boolean;
  isGlobalLoading: boolean;
  isTextLoading: boolean;
  onSignOutRef: React.MutableRefObject<Function>;
  setAuthResponse: (response: AuthApiResponse) => void;
  setAuthentication: () => void;
  setIsAuthLoading: (value: boolean) => void;
  setIsBrandingLoading: (value: boolean) => void;
  setIsComponentLoading: (value: boolean) => void;
  setIsTextLoading: (value: boolean) => void;
  setOnSignIn: (response?: any) => void | Promise<void>;
  setOnSignOut: (response?: any) => void | Promise<void>;
  setUsername: (username: string) => void;
  user: MeAPIResponse;
  username: string;
}

export default AuthContext;
