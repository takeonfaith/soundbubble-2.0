import {
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
} from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';
import { TPlace } from '../../entities/search/model/types';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { GlobalSearch } from '../../features/globalSearch';
import { LoginButton } from '../../features/loginButton';
import { SignUpButton } from '../../features/signUpButton';
import { ThemeButton } from '../../features/themeButton';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { Logo } from '../../shared/components/logo';
import Popover from '../../shared/components/popover';
import { AdminCircle } from '../header/styles';
import { sidebarApi, useSidebar } from '../sidebar/model';
import { GlobalSearchWrapper, LayoutHeaderStyled, UserButton } from './styles';
import { Popup } from '../newpopup';
import { UserContextMenu } from '../header/UserContextMenu';

export const LayoutHeader = () => {
    const [params] = useSearchParams();
    const [currentUser] = userModel.useUser();
    const queryValue = params.get('query') ?? '';
    const where = (params.get('where') ?? '') as TPlace | '';
    const isCollapsed = useSidebar();

    const handleHideSidebar = () => {
        sidebarApi.toggle();
    };

    return (
        <LayoutHeaderStyled>
            <Flex gap={0}>
                <Flex
                    width={
                        isCollapsed
                            ? '60px'
                            : 'calc(var(--sidebar-width) - 30px)'
                    }
                    jc="space-between"
                    padding={`0 ${isCollapsed ? 10 : 20}px 0 0`}
                >
                    <Logo short={isCollapsed} />
                    <Popover
                        content={
                            <>
                                Open/close menu
                                <kbd>c</kbd>
                            </>
                        }
                        position="right"
                    >
                        <Button
                            onClick={handleHideSidebar}
                            className="hide-sidebar-button"
                            $width="30px"
                            $height="30px"
                        >
                            {isCollapsed ? (
                                <IconChevronRight size={18} opacity={0.5} />
                            ) : (
                                <IconChevronLeft size={20} opacity={0.5} />
                            )}
                        </Button>
                    </Popover>
                </Flex>
                <GlobalSearchWrapper className={isCollapsed ? 'collapsed' : ''}>
                    <GlobalSearch
                        showTabs={false}
                        queryValue={queryValue}
                        where={where}
                    />
                </GlobalSearchWrapper>
            </Flex>
            <Flex gap={8}>
                <ThemeButton />

                {currentUser && (
                    <Popup content={<UserContextMenu />}>
                        <UserButton className="outline">
                            <Flex gap={8}>
                                {currentUser.isAdmin && <AdminCircle />}
                                <UserCover
                                    colors={currentUser?.imageColors}
                                    src={currentUser?.photoURL}
                                    size={'30px'}
                                    isAuthor={currentUser?.isAuthor}
                                />
                            </Flex>
                            <IconChevronDown size={14} />
                        </UserButton>
                    </Popup>
                )}
                <SignUpButton />
                <LoginButton />
            </Flex>
        </LayoutHeaderStyled>
    );
};
