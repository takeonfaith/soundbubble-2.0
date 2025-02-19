import { Flex } from '../../../shared/components/flex';
import { Input } from '../../../shared/components/input';

export const TimeRange = () => {
    const start = '9:00'
    const finish = '10:00'
    return (
        <Flex jc='flex-start' width="100%">
            <Flex width="fit-content" gap={10}>
                <Input type="time" placeholder="start" value={start} />
                <Input type="time" placeholder="finish" value={finish} />
            </Flex>
        </Flex>
    );
};
