package core.service;

import core.model.Pod;
import core.model.Node;
import core.repository.PodRepository;
import core.repository.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class NodeServiceImpl implements NodeService {
    @Autowired
    NodeRepository nodeRepository;
    @Autowired
    PodRepository podRepository;

    @Override
    public List<Node> getAllNodes() {
        return nodeRepository.getAllNodes();
    }


}
