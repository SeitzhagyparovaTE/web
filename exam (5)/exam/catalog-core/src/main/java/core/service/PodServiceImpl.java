package core.service;

import core.model.Pod;
import core.model.BaseEntity;
import core.model.Node;
import core.repository.PodRepository;
import core.repository.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PodServiceImpl implements PodService {
    @Autowired
    private PodRepository repository;
    @Autowired
    private NodeRepository nodeRepository;
    @Override
    public List<Pod> getAllActors() {
        return repository.findAll();
    }

    @Override
    public List<Pod> getAllAvailableActors() {

        Set<Pod> pods = new HashSet<>(nodeRepository.getAllNodes().stream().map(Node::getPods).reduce(new ArrayList<>(), (actors1, actors2) -> {
            actors1.addAll(actors2);
            return actors1;
        }));
        Set<Long> ids = pods.stream().map(BaseEntity::getId).collect(Collectors.toSet());
        System.out.println("the actor list size is"+ pods.size());
        return getAllActors().stream().filter(actor -> !ids.contains(actor.getId())).collect(Collectors.toList());
    }
}
